"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './tile-stats.module.css';
import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function TileStats({ icon }: { icon: 'comments' | 'heart' }) {
  const iconProp = icon === 'comments' ? faComments : faHeart; 

  return (
    <div className="group/stat transition-all flex gap-0.5 flex-col items-center">
      <div className={`${styles.button} transition-all duration-300 flex items-center justify-center rounded-full w-7 h-7 opacity-50 group-hover/stat:opacity-100`}>
        <FontAwesomeIcon className={styles.icon} icon={iconProp} style={{ maxWidth: '0.8125rem', maxHeight: '0.8125rem' }} color='#F0DB4F' />
      </div>
      <span className={`${styles.text} transition-all duration-300 font-normal opacity-50 group-hover/stat:opacity-100`}>12</span>
    </div>
  )
}