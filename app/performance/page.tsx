import performanceImg from "@/public/performance.jpg"
import Hero from "@/app/components/Hero";

export default function Performance() {
  return (
        <div className="absolute -z-10 inset-0">
          <Hero title="We serve high performance applications" imgData={performanceImg} imgAlt="performance" />
        </div>
  );
}
