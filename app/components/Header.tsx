import Link from "next/link";

export const Header=() => (
    <div className="w-full absolute text-white z-10">
        <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">

            <Link className="font-bond text-3xl" href="/">home</Link>
            <div className="space-x-4 text-xl">
                <Link href="/reliability">reliability</Link>
                <Link href="/performance">performance</Link>
                <Link href="/scale">scale</Link>
            </div>

        </nav>

    </div>
)