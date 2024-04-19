import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './article-stats.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ArticleStats() {
  return (
    <div className='flex w-auto justify-center gap-3 py-2'>
      <div className='group flex cursor-pointer flex-col items-center gap-2 text-xs'>
        <div
          className={`${styles.circle} flex h-9 w-9 cursor-pointer items-center justify-center rounded-full opacity-50 transition-all duration-300 group-hover:opacity-100`}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={faHeart}
            style={{ maxWidth: '0.8125rem', maxHeight: '0.8125rem' }}
            color='#333333'
          />
        </div>
        <span
          style={{ color: '#535353' }}
          className='cursor-pointer font-medium opacity-50 group-hover:opacity-100'
        >
          12
        </span>
      </div>
      <div className='group flex cursor-pointer flex-col items-center gap-2 text-xs'>
        <div
          className={`${styles.circle} flex h-9 w-9 cursor-pointer items-center justify-center rounded-full opacity-50 transition-all duration-300 group-hover:opacity-100`}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={faComments}
            style={{ maxWidth: '0.8125rem', maxHeight: '0.8125rem' }}
            color='#333333'
          />
        </div>
        <span
          style={{ color: '#535353' }}
          className='cursor-pointer font-medium opacity-50 group-hover:opacity-100'
        >
          12
        </span>
      </div>
    </div>
  );
}
