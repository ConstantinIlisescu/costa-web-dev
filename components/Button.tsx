import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({
  href,
  imgPath,
  text,
}: {
  href: string;
  imgPath: string;
  text: string;
}) => {
  return (
    <Link href={href} className="w-44 relative group">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h5 className="gradient-neptune group-hover:text-orange">{text}</h5>
      </div>
      <Image
        src={imgPath}
        alt="button colorful border"
        width={326}
        height={77}
      />
    </Link>
  );
};

export default Button;
