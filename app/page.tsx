import homeImg from "@/public/home.jpg"
import Hero from "@/app/components/Hero";

export default function Home() {
    return (
            <div className="absolute -z-10 inset-0">

                <Hero title="Professional Clould Hosting" imgData={homeImg} imgAlt="car background"/>
            </div>
    );
}
