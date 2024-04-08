"use client"

import styles from './article-likes.module.css';

export default function ArticleLikes() {

  return (
    <div className="flex gap-1 flex-col items-center">
      <div className={`${styles.button} rounded-full w-7 h-7`}>

      </div>
      <span className={`${styles.text} font-normal opacity-90`}>12</span>
    </div>
  )
}