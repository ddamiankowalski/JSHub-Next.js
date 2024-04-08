import Image from "next/image";
import bg from "@/../public/img/article/1.png";

export default function ArticleTile() {
  return (
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
      <span className="relative">hello world</span>
    </div>
  )
}