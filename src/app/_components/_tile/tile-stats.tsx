'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './tile-stats.module.css';
import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function TileStats({ icon, value }: { icon: 'comments' | 'heart', value: number }) {
  const iconProp = icon === 'comments' ? faComments : faHeart;

  return (
    <div className='group/stat flex flex-col items-center gap-0.5 transition-all'>
      <div
        className={`${styles.button} flex h-7 w-7 items-center justify-center rounded-full opacity-50 transition-all duration-300 group-hover/stat:opacity-100`}
      >
        <FontAwesomeIcon
          className={styles.icon}
          icon={iconProp}
          style={{ maxWidth: '0.8125rem', maxHeight: '0.8125rem' }}
          color='#F0DB4F'
        />
      </div>
      <span
        className={`${styles.text} font-normal opacity-50 transition-all duration-300 group-hover/stat:opacity-100`}
      >
        {value}
      </span>
    </div>
  );
}
