import type { Metadata } from 'next';
import HomePage, { Article } from './HomePage';

const title = 'Home | nextjs-starter';

export const metadata: Metadata = {
  title: title,
};

async function getArticles(): Promise<Article[]> {
  const res = await fetch('https://cuy-api.vercel.app/v1/home');
  const data = await res.json();
  return data.articles;
}

export default async function Home() {
  const articles = await getArticles();
  return <HomePage articles={articles} />;
}
