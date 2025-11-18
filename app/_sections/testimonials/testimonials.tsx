'use client';
import React from 'react'
import TestimonialCard from './_components/testimonial-card'
import CyclicCarousel from '@/components/ui/cyclic-carousel';
import Carousel from '@/components/ui/carousel-2';

export default function Testimonials() {
  const cardData = [
    {
      summary: 'Highly recommended',
      reviewText: "It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "ProPlayer"
    },
    {
      summary: 'Amazing experience',
      reviewText: "Some more review text here...",
      rating: 5,
      date: "AUG 22",
      author: "GameMaster"
    },
    {
      summary: 'Best game ever',
      reviewText: "Some more review text here...",
      rating: 5,
      date: "AUG 22",
      author: "CoinCollector"
    }
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
          <span className="text-subheading text-white uppercase tracking-wider">TESTIMONIALS</span>{" "}
        </h2>
      </div>

      <div className='w-full px-4'>
        <Carousel
        items={cardData}
        cardWidth={320}
        scrollAmount={350}
        renderItem={(item,index) => (
          <TestimonialCard
              index={index} 
              summary={item.summary}  
              reviewText={item.reviewText}
              rating={item.rating}
              date={item.date}
              author={item.author}
            />
        )}
      />
      </div>

      {/* Hide scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
