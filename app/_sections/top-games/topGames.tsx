/* eslint-disable @next/next/no-img-element */
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import GameCard from "./_components/game-card";
import Carousel from "@/components/ui/carousel-2";

interface Game {
  title: string;
  icon: string;
  url: string;
}


const TopGames: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const games: Game[] = [
    { title: "8 Ball Pool", url: "/assets/8Balls.png", icon: "/assets/8BallsLogo.png" },
    { title: "8 Ball Pool", url: "/assets/8Balls.png", icon: "/assets/8BallsLogo.png" },
    { title: "8 Ball Pool", url: "/assets/8Balls.png", icon: "/assets/8BallsLogo.png" },
    { title: "8 Ball Pool", url: "/assets/8Balls.png", icon: "/assets/8BallsLogo.png" },
    { title: "8 Ball Pool", url: "/assets/8Balls.png", icon: "/assets/8BallsLogo.png" },
  ];

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setScrollPosition(el.scrollLeft);
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-black font-inter overflow-x-hidden">
      <img src="/assets/plutusLogo.png" alt="" className="absolute left-0" />
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-center mb-12">
          <span className="text-subheading font-regular uppercase">TOP GAMES ON</span>{" "}
          <span className="text-subheading font-regular bg-clip-text text-[#FF69EB]">PLUTUS</span>
        </h2>
    </div>

    <div className="w-full px-4">
      <Carousel
      items={games}
      cardWidth={320}
      scrollAmount={350}
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
