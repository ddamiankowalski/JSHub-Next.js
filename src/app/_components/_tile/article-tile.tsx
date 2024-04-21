import Image from 'next/image';
import bg from '@/../public/img/article/1.png';

import styles from './article-tile.module.css';
import Link from 'next/link';
import ArticleStats from './tile-stats';

export default function ArticleTile({ article }: { article: any }) {
  return (
    <Link href={'/article/' + article.id}>
      <div className='group relative min-h-32 select-none rounded-md shadow-lg transition-all duration-300 hover:shadow-xl'>
        <Image
          className='select-none rounded-lg'
          src={bg}
          alt='Article bg image'
          fill={true}
          style={{ objectFit: 'cover' }}
          placeholder='blur'
          draggable='false'
        ></Image>
        <div
          className={`${styles.tile} rounded-md transition-all group-hover:opacity-90`}
        ></div>
        <div className='tile-text justify-between w-full absolute bottom-3 flex min-h-14 gap-2.5 px-4 text-sm font-medium opacity-70 transition-all duration-300 group-hover:opacity-90'>
          <span className={`relative my-auto ${styles['tile-text']}`}>
            {article.title}
          </span>
          <div className='flex items-center gap-1.5'>
            <ArticleStats value={article.likes} icon='heart' />
            <ArticleStats value={article.comments} icon='comments' />
          </div>
        </div>
      </div>
    </Link>
  );
}
