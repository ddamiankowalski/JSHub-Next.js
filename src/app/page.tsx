import ArticleTile from "./_components/_tile/article-tile";
import Transition from "./transition";

export default function MainPage() {
  return (
    <div className="grid gap-5 grid-cols-auto-fit-100">
      <Transition>
        <ArticleTile />
      </Transition>
      <Transition>
        <ArticleTile />
      </Transition>
      <Transition>
        <ArticleTile />
      </Transition>
      <Transition>
        <ArticleTile />
      </Transition>
      <Transition>
        <ArticleTile />
      </Transition>
      <Transition>
        <ArticleTile />
      </Transition>
    </div>
  );
}
