import Image from "next/image";
import home from "../public/home.jpg"

export default function Home() {
    return (
        <main className="">
            <div className="absolute -z-10 inset-0">
                Home page
                <Image src={home} alt={'car background'} fill style={{objectFit:"cover"}}/>
            </div>

        </main>
    );
}
