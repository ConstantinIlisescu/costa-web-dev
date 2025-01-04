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
          <h1 className="text-gray text-6xl pt-28 z-30">Home Title</h1>
        </div>
      </section>
    </>
  );
}
