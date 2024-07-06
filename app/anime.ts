// app/anime.ts

export interface Anime {
  rating: string;
  trailer: string;
  title: string;
  info: {
    Status: string;
    'Tipe Karakter': string;
    'Tipe Karakter_link': string;
    Studio: string;
    Studio_link: string;
    'Telah rilis': string;
    Durasi: string;
    Musim: string;
    Musim_link: string;
    Jenis: string;
    Episode: string;
    Pengarang: string;
    Pengarang_link: string;
    'Ditayangkan oleh': string;
    'Rilis di': string;
    'Diupdate di': string;
  };
  sinopsis: string;
  eplister: Episode[];
  lastEpisode: {
    link: string;
    title: string;
  };
  downloads: Download[];
  recommendations: Recommendation[];
}

export interface Episode {
  link: string;
  title: string;
  epnum: string;
  date: string;
}

export interface Download {
  server: string;
  links: {
    link: string;
    title: string;
  }[];
}

export interface Recommendation {
  link: string;
  type: string;
  epx: string;
  img: string;
  title: string;
}
