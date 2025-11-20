import { APP_STORE_URL, isApple, PLAY_STORE_URL } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface GameCardProps {
  title: string;
  icon: string;
  imagePlaceholderUrl: string;
}

export default function GameCard({ title, icon, imagePlaceholderUrl }: GameCardProps) {
  return (
    <Link href={isApple() ? APP_STORE_URL : PLAY_STORE_URL} target="__blank">
      <div className="flex flex-col items-center w-60 lg:w-80 mr-6">
        <div className="relative w-full h-[21.5625rem] lg:h-[28.75rem]">

          {/* Main Image with INNER BORDER */}
          <div className="absolute inset-0 rounded-2xl outline-[0.1875rem] outline-[#0000003D] outline-offset-[-0.1875rem] overflow-hidden">
            <Image
              src={imagePlaceholderUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Icon with INNER BORDER */}
          <div
            className="
              absolute -bottom-8 lg:-bottom-10 left-1/2 transform -translate-x-1/2
              rounded-2xl outline-[0.1875rem] outline-[#0000003D] outline-offset-[-0.1875rem] overflow-hidden
              w-[5.625rem] lg:w-[7.5rem] h-[5.625rem] lg:h-[7.5rem]
            "
          >
            <Image
              src={icon}
              alt={`${title} icon`}
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-24-medium-inter !font-bold text-white tracking-wider mt-10 lg:mt-12">
          {title}
        </p>
      </div>
    </Link>
  );
}
