import { getArticle } from '@/api/articles';
import Transition from '../../../lib/transition';
import ArticlePicture from '../_components/article-picture';
import ArticleStats from '../_components/article-stats';
import AuthorInfo from '../_components/author-info';

export default async function Article({ params }: { params: { id: string } }) {
  const { article } = await getArticle(params.id);

  return (
    <div className='m-auto flex w-4/6 flex-col items-center'>
      <Transition className='flex justify-center'>
        <h1
          className='max-w-2xl py-6 text-center text-4xl font-extrabold leading-[3rem]'
          style={{ color: '#333333' }}
        >
          {article.title}
        </h1>
      </Transition>
      <Transition delay={0.3}>
        <AuthorInfo />
        <ArticleStats />
      </Transition>
      <Transition delay={0.3}>
        <ArticlePicture />
      </Transition>
    </div>
  );
}
