import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './article-stats.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ArticleStats() {  
  return (
    <div className="flex gap-3 justify-center w-auto py-2">
      <div className="group cursor-pointer flex flex-col items-center gap-2 text-xs">
        <div className={`${styles.circle} items-center justify-center transition-all duration-300 flex w-9 h-9 rounded-full cursor-pointer opacity-50 group-hover:opacity-100`}>
          <FontAwesomeIcon className={styles.icon} icon={faHeart} style={{ maxWidth: '0.8125rem', maxHeight: '0.8125rem' }} color='#333333' />
        </div>
        <span style={{ color: '#535353' }} className="font-medium cursor-pointer opacity-50 group-hover:opacity-100">12</span>
      </div>
      <div className="group cursor-pointer flex flex-col items-center gap-2 text-xs">
        <div className={`${styles.circle} items-center justify-center transition-all duration-300 flex w-9 h-9 rounded-full cursor-pointer opacity-50 group-hover:opacity-100`}>
          <FontAwesomeIcon className={styles.icon} icon={faComments} style={{ maxWidth: '0.8125rem', maxHeight: '0.8125rem' }} color='#333333' />
        </div>
        <span style={{ color: '#535353' }} className="font-medium cursor-pointer opacity-50 group-hover:opacity-100">12</span>
      </div>
    </div>
  )
}