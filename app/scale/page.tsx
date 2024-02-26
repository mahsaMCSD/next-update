import scaleImg from "@/public/scale.jpg"
import Hero from "@/app/components/Hero";

export default function Scale() {
  return (
        <div className="absolute -z-10 inset-0">
          <Hero title="Scale your app to infinity" imgData={scaleImg} imgAlt="scale" />
        </div>
  );
}
