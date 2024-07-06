// pages/anime/[endpoint].tsx

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Anime } from '../../app/anime';

interface AnimeProps {
  anime: Anime;
}

const AnimePage = ({ anime }: AnimeProps) => {
  const router = useRouter();
  const { endpoint } = router.query;

  return (
    <div>
      <h1>{anime.title}</h1>
      <p>Rating: {anime.rating}</p>
      <p>Sinopsis: {anime.sinopsis}</p>
      
      {/* Display episodes */}
      <h2>Episode List</h2>
      <ul>
        {anime.eplister.map((episode, index) => (
          <li key={index}>
            <a href={episode.link}>{episode.title}</a> - Episode {episode.epnum} ({episode.date})
          </li>
        ))}
      </ul>
      
      {/* Display downloads */}
      <h2>Downloads</h2>
      {anime.downloads.map((download, index) => (
        <div key={index}>
          <h3>{download.server}</h3>
          <ul>
            {download.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      {/* Display recommendations */}
      <h2>Recommendations</h2>
      <ul>
        {anime.recommendations.map((recommendation, index) => (
          <li key={index}>
            <a href={recommendation.link}>{recommendation.title}</a> - {recommendation.type} ({recommendation.epx})
            <br />
            <img src={recommendation.img} alt={recommendation.title} style={{ maxWidth: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { endpoint } = params;
  const res = await fetch(`https://cuy-api.vercel.app/v1/anime/${endpoint}`);
  const anime: Anime = await res.json();

  return {
    props: {
      anime,
    },
  };
};

export default AnimePage;
