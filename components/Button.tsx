import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({
  href,
  imgPath = "/button-border.png",
  text,
  target,
  referrerPolicy,
}: {
  href: string;
  imgPath?: string;
  text: string;
  target?: "_blank" | undefined;
  referrerPolicy?: "no-referrer" | undefined;
}) => {
  return (
    <Link
      href={href}
      className="w-44 relative group "
      target={target}
      referrerPolicy={referrerPolicy}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h5 className="gradient-neptune group-hover:text-orange">{text}</h5>
      </div>
      <Image
        src={imgPath}
        alt="button colorful border"
        width={180}
        height={35}
      />
    </Link>
  );
};

export default Button;
