import Transition from "../../lib/transition";
import AuthorInfo from "./_components/author-info";

export default function Article() {
    return (
        <div className="flex flex-col items-center">
            <Transition>
                <h1 className="max-w-2xl text-4xl py-6 text-center leading-[3rem] font-bold" style={{ color: '#333333' }}>How closures can change the world... or at least your code</h1>
            </Transition>
            <Transition delay={0.3}>
                <AuthorInfo />
            </Transition>
        </div>
    )
}