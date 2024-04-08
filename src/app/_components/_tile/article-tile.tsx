import Image from "next/image";
import bg from "@/../public/img/article/1.png";

import styles from './article-tile.module.css';
import Link from "next/link";

export default function ArticleTile() {
  return (
    <Link href="/">
      <div className="rounded-md relative min-h-32 select-none">
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
        <div className={`${styles.tile} rounded-md`}></div>
        <div className="flex text-sm font-semibold absolute bottom-2 px-4 min-h-14 opacity-70 hover:opacity-100 transition-all">
          <span className={`relative ${styles['tile-text']}`}>How closures change the world or at least your code...</span>
          <div className="flex">

          </div>
        </div>
      </div>
    </Link>
  )
}