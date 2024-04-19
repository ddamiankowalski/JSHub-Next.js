import ArticleTile from './_components/_tile/article-tile';
import Transition from '../lib/transition';

export default function MainPage() {
  return (
    <div className='grid grid-cols-auto-fit-100 gap-5'>
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
