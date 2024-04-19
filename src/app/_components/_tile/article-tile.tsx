import Image from 'next/image';
import bg from '@/../public/img/article/1.png';

import styles from './article-tile.module.css';
import Link from 'next/link';
import ArticleStats from './tile-stats';

export default function ArticleTile() {
  return (
    <Link href='/article'>
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
        <div className='tile-text absolute bottom-3 flex min-h-14 gap-2.5 px-4 text-sm font-medium opacity-70 transition-all duration-300 group-hover:opacity-90'>
          <span className={`relative m-auto ${styles['tile-text']}`}>
            How closures change the world or at least your code...
          </span>
          <div className='flex items-center gap-1.5'>
            <ArticleStats icon='heart' />
            <ArticleStats icon='comments' />
          </div>
        </div>
      </div>
    </Link>
  );
}
