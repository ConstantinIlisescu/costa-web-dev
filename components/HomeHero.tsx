import Image from "next/image";
import SectionOverlay from "./SectionOverlay";

const HomeHero = () => {
  return (
    <section id="home" className="relative screen-container">
      <Image
        src="/hero-image.png"
        alt="Hands typing on a laptop situated on a desk pictured from above."
        width={1920}
        height={1080}
        className="absolute-full-screen-image fade-img-bottom"
      />
      <SectionOverlay />
      <div className="absolute inset-0 z-30 flex items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex gap-6">
            <h2 className="text-gray large-hero-text-size hero-text-box-width text-right">
              Elevate
            </h2>
            <div className="flex flex-col items-center justify-center gap-8">
              <Image
                src="/hero-rectangle.png"
                alt="A colorful rectangle"
                width={77}
                height={583}
                className="h-[60vh] w-10 md:w-full"
              />
            </div>
            <div className="flex flex-col items-baseline justify-end hero-text-box-width">
              <h2 className="text-gray hero-text-size">Your</h2>
              <h2 className="text-purple hero-text-size">Online</h2>
              <h2 className="gradient-neptune large-hero-text-size">
                Presence
              </h2>
            </div>
          </div>
          <div>
            <Image
              src="/arrow.png"
              alt="An arrow pointing to the bottom"
              width={29}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
