// app/anime.ts or app/anime/index.ts
export interface Anime {
  rating: string;
  trailer: string;
  title: string;
  info: Record<string, string>;
  sinopsis: string;
  eplister: { link: string; title: string; epnum: string; date: string }[];
  lastEpisode: { link: string; title: string };
  downloads: { server: string; links: { link: string; title: string }[] }[];
  recommendations: { link: string; type: string; epx: string; img: string; title: string }[];
}

export const getAnimeByEndpoint = async (endpoint: string): Promise<Anime> => {
  const response = await fetch(`https://cuy-api.vercel.app/v1/anime/${endpoint}`);
  if (!response.ok) {
    throw new Error('Anime not found');
  }
  return response.json();
};
