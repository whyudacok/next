// app/anime/[slug].js

import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const res = await fetch(`https://cuy-api.vercel.app/v1/anime/${slug}`);
  const data = await res.json();

  return {
    props: {
      anime: data,
    },
  };
}

const AnimePage = ({ anime }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{anime.title}</h1>
      <p>Rating: {anime.rating}</p>
      <p>Trailer: <a href={anime.trailer} target="_blank">{anime.trailer}</a></p>
      <p>Sinopsis: {anime.sinopsis}</p>
      
      <h2>Info</h2>
      <ul>
        {Object.entries(anime.info).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>

      <h2>Episodes</h2>
      <ul>
        {anime.eplister.map(ep => (
          <li key={ep.epnum}>
            <a href={ep.link} target="_blank">{ep.title}</a> - {ep.date}
          </li>
        ))}
      </ul>

      <h2>Download Links</h2>
      {anime.downloads.map((download, index) => (
        <div key={index}>
          <h3>{download.server}</h3>
          <ul>
            {download.links.map(link => (
              <li key={link.link}>
                <a href={link.link} target="_blank">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Recommendations</h2>
      <ul>
        {anime.recommendations.map(rec => (
          <li key={rec.link}>
            <a href={rec.link} target="_blank">{rec.title}</a> - {rec.type} ({rec.epx})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimePage;
