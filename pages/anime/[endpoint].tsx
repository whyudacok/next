// pages/anime/[endpoint].tsx
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Anime, getAnimeByEndpoint } from '../../app/anime';
import Image from 'next/image';

interface AnimePageProps {
  anime: Anime;
}

const AnimePage: React.FC<AnimePageProps> = ({ anime }) => {
  const { query } = useRouter();

  return (
    <div>
      <h1>{anime.title}</h1>
      <p>Rating: {anime.rating}</p>
      <a href={anime.trailer} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
      <div>
        <h2>Info</h2>
        <ul>
          {Object.entries(anime.info).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
      <p>{anime.sinopsis}</p>
      <div>
        <h2>Episodes</h2>
        <ul>
          {anime.eplister.map((ep) => (
            <li key={ep.epnum}>
              <a href={ep.link}>{ep.title}</a> - {ep.date}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Download Links</h2>
        {anime.downloads.map((download) => (
          <div key={download.server}>
            <h3>{download.server}</h3>
            <ul>
              {download.links.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h2>Recommendations</h2>
        <ul>
          {anime.recommendations.map((rec, index) => (
            <li key={index}>
              <a href={rec.link}>
                <img src={rec.img} alt={rec.title} />
                <p>{rec.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { endpoint } = context.params!;
  try {
    const anime = await getAnimeByEndpoint(endpoint as string);
    return {
      props: {
        anime,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default AnimePage;
