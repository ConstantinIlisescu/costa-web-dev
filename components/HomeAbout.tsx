import Image from "next/image";
import SectionOverlay from "./SectionOverlay";
import Button from "./Button";

const HomeAbout = () => {
  return (
    <section id="about" className="relative screen-container">
      <Image
        src="/about.jpg"
        alt="Black and white shot of a coffee cup and fashion magazine on a table."
        width={1920}
        height={1280}
        className="absolute-full-screen-image fade-img-top-bottom"
      />
      <SectionOverlay />
      <div className="absolute inset-0 z-30 flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center md:items-start  gap-14">
          <div className="flex flex-col md:flex-row items-center justify-center x gap-5">
            <h2 className="section-header">About me</h2>
          </div>
          <div className="paragraph-width flex flex-col gap-3 section-paragraph">
            <p>
              I&apos;m a <span className="text-neptune">web developer</span>{" "}
              passionate about empowering small businesses to thrive in the
              digital age.
            </p>
            <p>
              My goal is to help you unlock your potential, connect with your
              audience, and grow in a rapidly evolving digital landscape.
            </p>
            <p>
              With expertise in React, TypeScript and other technologies, I
              craft user-friendly websites that showcase your unique offerings.
            </p>
            <p>
              From crafting compelling Google Business Profiles to developing
              robust, scalable web applications, I&apos;m committed to
              delivering exceptional results.
            </p>
            <p>
              Let&apos;s <span className="text-neptune">collaborate</span> to
              elevate your online presence and drive{" "}
              <span className="gradient-neptune">business growth</span>.
            </p>
          </div>
          <Button href="#steps" text="FIND HOW" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
