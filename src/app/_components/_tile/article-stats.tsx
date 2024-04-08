"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './article-stats.module.css';
import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function ArticleStats({ icon }: { icon: 'comments' | 'heart' }) {
  const iconProp = icon === 'comments' ? faComments : faHeart; 

  return (
    <div className="group transition-all flex gap-0.5 flex-col items-center">
      <div className={`${styles.button} flex items-center justify-center rounded-full w-7 h-7`}>
        <FontAwesomeIcon className={styles.icon} icon={iconProp} style={{ maxWidth: '1rem', maxHeight: '1rem' }} color='#F0DB4F' />
      </div>
      <span className={`${styles.text} font-normal opacity-90 group-hover:opacity-100`}>12</span>
    </div>
  )
}