import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="#home" className="flex items-center gap-2 link-hover">
      <Image src="/main-logo.png" alt="logo" width={30} height={30} />
      <span>CostaWebDev</span>
    </Link>
  );
};

export default Logo;
