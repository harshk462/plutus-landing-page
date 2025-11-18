"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useState } from "react";

interface CyclicCarouselProps {
  children: React.ReactNode[];
  speed?: number; // seconds for one full loop
  direction?: "left" | "right";
  className?: string;
}

export default function CyclicCarousel({
  children,
  speed = 20,
  direction = "left",
  className = "",
}: CyclicCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Duplicate the children for seamless looping
  const items = [...children, ...children];

  // Keyframes for animation
  const animationName = direction === "left" ? "scrollLeft" : "scrollRight";

  useEffect(() => {
    if (containerRef.current && wrapperRef.current) {
      // Get the total width of the original set of cards
      let totalCardsWidth = 0;
      for (let i = 0; i < children.length; i++) {
        const card = containerRef.current.children[i] as HTMLElement;
        if (card) totalCardsWidth += card.offsetWidth;
      }
      // Get the width of the visible wrapper
      const wrapperWidth = wrapperRef.current.offsetWidth;

      // If all cards fit, don't animate
      setShouldAnimate(totalCardsWidth > wrapperWidth);

      // Set the width of the container to fit all items (for animation)
      containerRef.current.style.width = `${totalCardsWidth * 2}px`;
    }
  }, [children.length, children]);

  return (
    <div ref={wrapperRef} className={cn(`overflow-hidden w-full`, shouldAnimate ? "" : "flex justify-center", className)}>
      <div
        ref={containerRef}
        className={cn("flex", shouldAnimate ? "" : "justify-center")}
        style={
          shouldAnimate
            ? { animation: `${animationName} ${speed}s linear infinite` }
            : {}
        }
      >
        {(shouldAnimate ? items : children).map((child, idx) => (
          <div key={idx} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
