import Image from "next/image";
import bg from "@/../public/img/article/1.png";

export default function ArticleTile() {
  return (
    <div className="grow rounded-md relative max-w-sm min-h-32 min-w-80">
      <Image
        className="rounded-lg"
        src={bg}
        alt="Article bg image"
        fill={true}
      >
      </Image>
      <span className="relative">hello world</span>
    </div>
  )
}