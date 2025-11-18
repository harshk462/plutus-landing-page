/* eslint-disable @next/next/no-img-element */
import React from "react";

interface GameCardProps {
  title: string;
  icon: string;
  imagePlaceholderUrl: string;
}

export default function GameCard({ title, icon, imagePlaceholderUrl }: GameCardProps) {
  return (
    <div className="flex flex-col items-center w-[320px] mr-6">
      <div className="relative w-full h-[460px]">
        <img
          src={imagePlaceholderUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl border-thick-transparent"
        />
        <img
          src={icon}
          alt={`${title} icon`}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-2xl border-thick-transparent"
        />
      </div>
      <p className="text-lg font-bold text-white tracking-wider mt-12">{title}</p>
    </div>
  );
}
