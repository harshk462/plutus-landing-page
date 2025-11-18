/* eslint-disable @next/next/no-img-element */
"use client";

import Carousel from "@/components/ui/carousel-2";
import React from "react";

interface CreatorCardProps {
  title: string;
  trades: string;
  tag: string;
  text: string;
  subText: string;
  imagePlaceholderUrl: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({
  title,
  trades,
  tag,
  text,
  subText,
  imagePlaceholderUrl,
}) => {
  return (
    <div
      className="
        relative w-[20rem] h-[32.8125rem]
        rounded-2xl overflow-hidden
        border border-[#FFFFFF1F] mr-[1.5rem]
        outline outline-[0.09375rem] outline-[#FFFFFF1F]
        outline-offset-[-0.09375rem]
      "
    >
      {/* Trades Badge */}
      <span
        className="
        absolute top-4 right-4 text-[0.75rem] text-white px-4 py-2
        bg-black/40 rounded-3xl w-fit
        backdrop-blur-md z-1000
      "
      >
        {trades}
      </span>

      {/* Background Image */}
      <img
        src={imagePlaceholderUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-4 left-0 w-full px-4 flex flex-col text-white">
        {/* Category Tag */}
        <span
          className="
          text-[0.75rem] px-4 py-2 text-white
          bg-white/10 rounded-3xl w-fit
          backdrop-blur-md
        "
        >
          {tag}
        </span>

        <h2 className="text-[1.125rem] font-semibold mt-1">{text}</h2>

        <p className="text-[0.75rem] text-gray-300 mt-2">{subText}</p>

        {/* Yes / No Buttons */}
        <div className="flex justify-between mt-4">
          <button className="flex-1 mr-2 border border-[#07F93C] rounded-[0.6rem] text-[0.875rem] bg-[#004012] py-1">
            Yes
          </button>
          <button className="flex-1 ml-2 border border-[#FD5C5C] rounded-[0.6rem] text-[0.875rem] bg-[#450404] py-1">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default function PredictNow() {
  const games = [
    {
      title: "8 Ball Pool",
      trades: "20K Trades",
      tag: "#SPORTS",
      text: "Messi’s MLS team to win their season opener?",
      subText: "Ends in 0D 0hrs 0mins",
      url: "/assets/messi.png",
    },
    {
      title: "8 Ball Pool",
      trades: "20K Trades",
      tag: "#SPORTS",
      text: "Messi’s MLS team to win their season opener?",
      subText: "Ends in 0D 0hrs 0mins",
      url: "/assets/messi.png",
    },
    {
      title: "8 Ball Pool",
      trades: "20K Trades",
      tag: "#SPORTS",
      text: "Messi’s MLS team to win their season opener?",
      subText: "Ends in 0D 0hrs 0mins",
      url: "/assets/messi.png",
    },
    {
      title: "8 Ball Pool",
      trades: "20K Trades",
      tag: "#SPORTS",
      text: "Messi’s MLS team to win their season opener?",
      subText: "Ends in 0D 0hrs 0mins",
      url: "/assets/messi.png",
    },
    {
      title: "8 Ball Pool",
      trades: "20K Trades",
      tag: "#SPORTS",
      text: "Messi’s MLS team to win their season opener?",
      subText: "Ends in 0D 0hrs 0mins",
      url: "/assets/messi.png",
    },
    {
      title: "8 Ball Pool",
      trades: "20K Trades",
      tag: "#SPORTS",
      text: "Messi’s MLS team to win their season opener?",
      subText: "Ends in 0D 0hrs 0mins",
      url: "/assets/messi.png",
    },
  ];

  return (
    <section className="relative bg-black font-inter w-full overflow-hidden">
      {/* Decorative Logo */}
      <img
        src="/assets/plutusLogo.png"
        alt="plutus logo"
        className="absolute right-0 -scale-x-100 w-[15.625rem] h-[15.625rem] pointer-events-none opacity-20"
      />

      {/* Title */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 pt-16">
          <span className="text-subheading uppercase">PREDICT NOW ON </span>
          <span className="text-subheading text-[#FF69EB]">PLUTUS</span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="w-full px-6">
        <Carousel
          items={games}
          cardWidth={320}
          scrollAmount={350}
          renderItem={(item) => (
            <CreatorCard
              title={item.title}
              trades={item.trades}
              tag={item.tag}
              text={item.text}
              subText={item.subText}
              imagePlaceholderUrl={item.url}
            />
          )}
        />
      </div>

      {/* Hide scrollbar globally for this section */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
