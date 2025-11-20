/* eslint-disable @next/next/no-img-element */
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import GameCard from "./_components/game-card";
import Carousel from "@/components/ui/carousel-2";
import Image from "next/image";

interface Game {
  title: string;
  icon: string;
  url: string;
}


const TopGames: React.FC = () => {
  const games: Game[] = [
    { title: "8 Ball Pool", icon: "https://cdn.plutus.gg/public/gameAssets/card_pool.webp", url: "https://cdn.plutus.gg/landing_page/assets/8-ball.gif" },
    { title: "Tower Twist", icon: "https://cdn.plutus.gg/public/gameAssets/card_tower.webp", url: "https://cdn.plutus.gg/landing_page/assets/tower-twist.gif" },
    { title: "Blazing Blades", icon: "https://cdn.plutus.gg/public/gameAssets/blades-card.webp", url: "https://cdn.plutus.gg/landing_page/assets/blazing-blades.gif" },
    { title: "Boulder Blast", icon: "https://cdn.plutus.gg/public/gameAssets/boulder-card.webp", url: "https://cdn.plutus.gg/landing_page/assets/boulder-blast.gif" },
    { title: "Battleship", icon: "https://cdn.plutus.gg/public/gameAssets/header_battleship.webp", url: "https://cdn.plutus.gg/landing_page/assets/battleship.gif" },
  ];

  return (
    <section className="relative bg-black font-inter overflow-x-hidden" id="games">
      <Image src="https://cdn.plutus.gg/landing_page/assets/plutusLogo.png" alt="" className="absolute left-0" width={250} height={250}/>
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-center mb-12">
          <span className="text-subheading font-regular uppercase">TOP GAMES ON</span>
          <span className="text-subheading font-regular bg-clip-text text-[#FF69EB]">{"  "}PLUTUS</span>
        </h2>
    </div>

    <div className="w-full px-6">
      <Carousel
      items={games}
      // cardWidth={320}
      // scrollAmount={350}
      gap="gap-0"
      renderItem={(item) => (
        <GameCard
          title={item.title}
          imagePlaceholderUrl={item.url}
          icon={item.icon}
        />
      )}
    />
    </div>

  <style>{`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
</section>

  );
};

export default TopGames;
