import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home" className="relative h-screen w-screen">
        <Image
          src="/hero-image.png"
          alt="Hands typing on a laptop situated on a desk pictured from above."
          width={1920}
          height={1080}
          className="absolute h-screen w-screen object-cover top-0 left-0 fade-img-bottom z-10"
        />
        <span className="absolute top-0 bottom-0 w-full h-full bg-black-300/80 z-20"></span>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
          <div className="flex gap-6">
            <h2 className="text-gray text-4xl sm:text-5xl md:text-7xl z-30 hero-text-box-width text-right">
              Elevate
            </h2>
            <Image
              src="/hero-rectangle.png"
              alt="A colorful rectangle"
              width={77}
              height={583}
              className="h-[70vh] w-10 md:w-full"
            />
            <div className="flex flex-col items-baseline justify-end hero-text-box-width">
              <h2 className="text-gray text-4xl sm:text-5xl md:text-6xl z-30">
                Your
              </h2>
              <h2 className="text-purple text-4xl sm:text-5xl md:text-6xl z-30">
                Online
              </h2>
              <h2 className="gradient-neptune text-4xl sm:text-5xl md:text-7xl z-30">
                Presence
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
