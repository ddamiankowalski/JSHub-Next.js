import Image from "next/image";
import bg from "@/../public/img/article/1.png";

import styles from './article-tile.module.css';
import Link from "next/link";
import ArticleStats from "./article-stats";

export default function ArticleTile() {
  return (
    <Link href="/">
      <div className="group rounded-md relative min-h-32 select-none shadow-lg hover:shadow-xl transition-all duration-300">
        <Image
          className="rounded-lg select-none"
          src={bg}
          alt="Article bg image"
          fill={true}
          style={{ objectFit: "cover" }}
          placeholder="blur"
          draggable="false"
        >
        </Image>
        <div className={`${styles.tile} rounded-md group-hover:opacity-90 transition-all`}></div>
        <div className="tile-text flex gap-2.5 text-sm font-medium absolute bottom-3 px-4 min-h-14 opacity-70 group-hover:opacity-90 transition-all duration-300">
          <span className={`relative m-auto ${styles['tile-text']}`}>How closures change the world or at least your code...</span>
          <div className="flex gap-1.5 items-center">
            <ArticleStats icon="heart" />
            <ArticleStats icon="comments" />
          </div>
        </div>
      </div>
    </Link>
  )
}