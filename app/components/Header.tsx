import Link from "next/link";

export const Header=() => (
    <div>
        <Link href="/">home</Link>
        <Link href="/reliability">reliability</Link>
        <Link href="/performance">performance</Link>
        <Link href="/scale">scale</Link>
    </div>
)