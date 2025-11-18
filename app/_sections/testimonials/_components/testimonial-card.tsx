import IconApple from '@/components/icons/IconApple';
import { Star } from 'lucide-react';
import React from 'react';

interface ITestimonialCard {
  summary: string;
  reviewText: string;
  rating: number;
  date: string;
  author: string;
  index: number;
}

export default function TestimonialCard({
  summary,
  reviewText,
  rating,
  date,
  author,
  index,
}: ITestimonialCard) {
  const fullStars = Math.min(5, Math.floor(rating));

  return (
    <div
  className="
    relative flex flex-col p-3 rounded-[24px] border border-[#FFFFFF1F]
    bg-gradient-to-r from-[#870075A1] to-[#100134A1] shadow-lg
    lg:w-[540px] w-full mx-auto mr-4 h-[15rem] lg:h-64
  "
>
  {/* Decorative Background Logo */}
  <img
    src="/assets/plutusLogo.png"
    alt=""
    className={`absolute w-[180px] opacity-20 ${
      index % 2 === 0 ? 'top-2 left-2' : 'bottom-2 right-2 -scale-x-100'
    } pointer-events-none`}
  />

  {/* Header */}
  <div className="flex justify-between items-start z-10">
    <div className="flex-1 pr-2">
      <p className="text-white text-20-medium-inter">{summary}</p>

      <div className="flex gap-1 mt-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={16} fill="yellow" strokeWidth={0} color="yellow" />
        ))}
      </div>
    </div>

    <div className="flex flex-col items-end text-white/70 text-14-regular-inter z-10">
      <p>{date}</p>
      <p>{author}</p>
    </div>
  </div>

  {/* Review Text */}
  <div className="text-16-regular-inter text-white/70 mt-3 z-10 flex flex-1 justify-center items-center">
    <p className="leading-relaxed">{reviewText}</p>
  </div>

  {/* Footer Logo */}
  <div className="flex justify-end pt-3 z-10">
    <IconApple className="w-6 h-6 md:w-8 md:h-8" />
  </div>
</div>

  );
}
