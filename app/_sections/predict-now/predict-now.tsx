/* eslint-disable @next/next/no-img-element */
"use client";

import Carousel from "@/components/ui/carousel-2";
import React from "react";

interface CreatorCardProps {
  title: string;
  imagePlaceholderUrl: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({
  title,
  imagePlaceholderUrl,
}) => {
  return (
    <div className="relative w-[320px] h-[525px] rounded-2xl overflow-hidden border border-[#FFFFFF1F] mr-6">
      
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
        <span className="text-xs text-gray-300 font-semibold uppercase tracking-wide">
          #SPORTS
        </span>

        <h2 className="text-lg font-semibold mt-1">
          Messi’s MLS team to win their season opener?
        </h2>

        <p className="text-xs text-gray-300 mt-2">Ends in 0D 0hrs 0mins</p>

        <div className="flex justify-between mt-4">
          <button className="flex-1 mr-2 border border-[#07F93C] rounded-[10px] text-[14px] bg-[#004012] py-0.5">
            Yes
          </button>
          <button className="flex-1 mr-2 border border-[#FD5C5C] rounded-[10px] text-[14px] bg-[#450404] py-0.5">
            No
          </button>
        </div>
      </div>
    </div>
  );
};


interface Game {
  title: string;
  url: string;
  icon: string;
}

export default function PredictNow() {
  const games: Game[] = [
    { title: "8 Ball Pool", icon: "/assets/towerTwistIcon.png", url: "/assets/messi.png" },
    { title: "8 Ball Pool", icon: "/assets/towerTwistIcon.png", url: "/assets/messi.png" },
    { title: "8 Ball Pool", icon: "/assets/towerTwistIcon.png", url: "/assets/messi.png" },
    { title: "8 Ball Pool", icon: "/assets/towerTwistIcon.png", url: "/assets/messi.png" },
    { title: "8 Ball Pool", icon: "/assets/towerTwistIcon.png", url: "/assets/messi.png" },
    { title: "8 Ball Pool", icon: "/assets/towerTwistIcon.png", url: "/assets/messi.png" },
    { title: "8 Ball Pool", icon: "/assets/towerTwistIcon.png", url: "/assets/messi.png" },
  ];

  return (
    <section className="relative bg-black font-inter w-full overflow-hidden">
      <img
        src="/assets/plutusLogo.png"
        alt="plutus logo"
        className="absolute right-0 -scale-x-100 w-[250px] h-[250px] pointer-events-none"
      />

      {/* Title */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 pt-16">
          <span className="text-subheading font-regular uppercase">PREDICT NOW ON</span>{" "}
          <span className="text-subheading font-regular bg-clip-text text-[#FF69EB]">PLUTUS</span>
        </h2>
      </div>

      <div className="w-full px-4">
        <Carousel
          items={games}
          cardWidth={320}
          scrollAmount={350}
          renderItem={(item) => (
            <CreatorCard
              title={item.title}
              imagePlaceholderUrl={item.url}
            />
          )}
        />
      </div>

      {/* Custom Scrollbar Hide */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
