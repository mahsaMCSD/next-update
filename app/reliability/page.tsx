import reliabilityImg from "@/public/reliability.jpg"
import Hero from "@/app/components/Hero";

export default function Reliability() {
  return (
        <div className="absolute -z-10 inset-0">
          <Hero title="Super high reliability hoisting" imgData={reliabilityImg} imgAlt="reliability" />
        </div>
  );
}
