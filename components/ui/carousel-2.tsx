"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  scrollAmount?: number;
  gap?: string;
  cardWidth?: number;
}

export default function Carousel<T>({
  items,
  renderItem,
  scrollAmount = 340,
  gap = "gap-4",
  cardWidth,
}: CarouselProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const updateScrollButtons = () => {
    const el = containerRef.current;
    if (!el) return;

    const scrollable = el.scrollWidth > el.clientWidth + 10;
    setIsScrollable(scrollable);

    setCanScrollLeft(scrollable && el.scrollLeft > 0);
    setCanScrollRight(scrollable && el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full flex items-center">
      {/* LEFT ARROW */}
      {isScrollable && (
        <button
          onClick={scrollLeft}
          className={`absolute left-0 z-20 p-3 rounded-full bg-[#22222266] text-white backdrop-blur-[9.2px] transition-opacity ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className={`flex overflow-x-auto no-scrollbar w-full ${
          isScrollable ? gap : "justify-center"
        }`}
      >
        {items.map((item, index) => (
          <div
            key={index}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      {isScrollable && (
        <button
          onClick={scrollRight}
          className={`absolute right-0 z-20 p-3 rounded-full bg-[#22222266] text-white backdrop-blur-[9.2px] transition-opacity ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
