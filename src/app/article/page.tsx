import Transition from "../../lib/transition";
import ArticlePicture from "./_components/article-picture";
import ArticleStats from "./_components/article-stats";
import AuthorInfo from "./_components/author-info";

export default function Article() {
    return (
        <div className="m-auto flex flex-col items-center w-4/6">
            <Transition className="flex justify-center">
                <h1 className="max-w-2xl text-4xl py-6 text-center leading-[3rem] font-extrabold" style={{ color: '#333333' }}>How closures can change the world... or at least your code</h1>
            </Transition>
            <Transition delay={0.3}>
                <AuthorInfo />
                <ArticleStats />
            </Transition>
            <Transition delay={0.3}>
                <ArticlePicture />
            </Transition>
        </div>
    )
}