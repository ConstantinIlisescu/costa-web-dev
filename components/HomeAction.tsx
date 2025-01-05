import Image from "next/image";
import SectionOverlay from "./SectionOverlay";
import Button from "./Button";

const HomeAction = () => {
  return (
    <section className="relative screen-container">
      <Image
        src="/call-to-action.png"
        alt="Laptop next to a white rustic cup and a green plant, on a white table"
        width={1920}
        height={1080}
        className="absolute-full-screen-image fade-img-top-bottom"
      />
      <SectionOverlay />
      <div className="absolute inset-0 z-30 flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center md:items-start  gap-14">
          <div className="flex flex-col md:flex-row items-center justify-center x gap-5">
            <h2 className="section-header">Your Vision</h2>
            <Image
              src="/code-logo.png"
              alt="HTML code self closing tag logo"
              width={50}
              height={50}
            />
            <h2 className="section-header text-center md:text-start">
              My code
            </h2>
          </div>
          <p className="max-w-sm section-paragraph">
            I&apos;m passionate about empowering small businesses thrive in the
            digital age. My goal is to help you unlock your potential, connect
            with your audience, and grow in a rapidly evolving digital
            landscape.
          </p>
          <Button href="#steps" text="FIND HOW" />
        </div>
      </div>
    </section>
  );
};

export default HomeAction;
