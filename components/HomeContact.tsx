import Image from "next/image";
import SectionOverlay from "./SectionOverlay";
import Logo from "./Logo";
import Link from "next/link";

const HomeContact = () => {
  return (
    <section id="contact" className="relative screen-container">
      <Image
        src="/contact-me.jpg"
        alt="Paper style white monochrome background"
        width={1380}
        height={920}
        className="absolute-full-screen-image fade-img-top-bottom"
      />
      <SectionOverlay />
      <div className="absolute inset-0 z-30 flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center md:items-start  gap-14">
          <h2 className="section-header">Contact me</h2>
          <div className="max-w-sm section-paragraph flex flex-col gap-5">
            <p>
              Use the information below to send me a message or give me a call.
            </p>
            <p>—I’ll be in touch as soon as I step away from the keyboard!</p>
          </div>

          <div className="flex flex-col gap-5">
            <Link href="#" className="group flex items-center gap-5">
              <Image
                src="/instagram.png"
                alt="instagram icon"
                width={65}
                height={65}
              />
              <p className="section-paragraph group-hover:text-orange">
                #costawebdev
              </p>
            </Link>
            <Link href="#" className="group flex items-center gap-5">
              <Image
                src="/messenger.png"
                alt="instagram icon"
                width={65}
                height={65}
              />
              <p className="section-paragraph group-hover:text-orange">
                costawebdev
              </p>
            </Link>
            <Link href="#" className="group flex items-center gap-5">
              <Image
                src="/phone.png"
                alt="instagram icon"
                width={65}
                height={65}
              />
              <p className="section-paragraph group-hover:text-orange">
                07774774747
              </p>
            </Link>
            <Link href="#" className="group flex items-center gap-5">
              <Image
                src="/email.png"
                alt="instagram icon"
                width={65}
                height={65}
              />
              <p className="section-paragraph group-hover:text-orange">
                costawebdev@gmail.com
              </p>
            </Link>
          </div>

          <span className="pt-32 pb">
            <Logo />
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
