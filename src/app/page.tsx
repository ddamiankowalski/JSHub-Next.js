import ArticleTile from './_components/_tile/article-tile';
import Transition from '../lib/transition';
import { getArticles } from '@/api/articles';

export default async function MainPage() {
  const { articles } = await getArticles();

  return (
    <div className='grid grid-cols-auto-fit-100 gap-5'>
      {articles.map((article: any) => <Transition key={article.id}><ArticleTile article={article} /></Transition>)}
    </div>
  );
}
