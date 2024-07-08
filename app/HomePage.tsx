export interface Article {
  link: string;
  typez: string;
  title: string;
  img: string;
}
 
export default function HomePage({ articles }: { articles: Article[] }) {
  return (
<div className="adsw">
      <div className="flex gap-8 lg:flex-row flex-col 2xl:px-[0px] px-5 mt-12">
        <div className="w-full">
          <div className="relative p-4 pt-6 space-y-4 overflow-hidden border rounded-2xl border-border-gray" id="recent">
            <div className="relative flex items-center gap-4 mb-6 -ml-6">
              <div className="h-10 w-0.5 gradient-background-primary"></div>
              <div className="gradient-background-primary p-2.5 rounded-2xl">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.59631 18.8535L2.09631 14.6868L2.90572 13.2299L10.001 17.1717L17.0963 13.2299L17.9057 14.6868L10.4057 18.8535C10.154 18.9933 9.848 18.9933 9.59631 18.8535Z" fill="#070709" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.59631 14.6867L2.09631 10.52L2.90572 9.06311L10.001 13.0049L17.0963 9.06311L17.9057 10.52L10.4057 14.6867C10.154 14.8265 9.848 14.8265 9.59631 14.6867Z" fill="#070709" />
                  <path d="M9.69647 1.12028C9.88524 1.01541 10.1148 1.01541 10.3035 1.12028L17.8035 5.28694C18.0019 5.39718 18.125 5.60631 18.125 5.83329C18.125 6.06027 18.0019 6.26941 17.8035 6.37964L10.3035 10.5463C10.1148 10.6512 9.88524 10.6512 9.69647 10.5463L2.19647 6.37964C1.99806 6.26941 1.875 6.06027 1.875 5.83329C1.875 5.60631 1.99806 5.39718 2.19647 5.28694L9.69647 1.12028Z" fill="#070709" />
                </svg>
              </div>
              <p className="text-lg font-semibold font-haffer">
                Anime update
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mb-8 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-3">
              {articles.map((article, index) => (
                <div className="recentCard" key={index}>
                  <a href={article.link}>
                    <div className="w-full shine aspect-16/22 rounded-2xl">
                      <img loading="lazy" src={article.img} className="w-full aspect-16/22 rounded-2xl" alt={article.title} />
                    </div>
                    <p className="mt-4 mb-2 font-semibold font-haffer line-clamp-1">
                      {article.title}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
