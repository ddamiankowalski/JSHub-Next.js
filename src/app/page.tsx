import ArticleTile from "./_components/_tile/article-tile";
import Transition from "./transition";

export default function MainPage() {
  return (
    <Transition>
      <div className="mt-20 grid gap-5 grid-cols-auto-fit-100">
        <ArticleTile />
        <ArticleTile />
        <ArticleTile />
        <ArticleTile />
        <ArticleTile />
      </div>
    </Transition>
  );
}
