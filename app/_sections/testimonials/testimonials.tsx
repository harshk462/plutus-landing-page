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
      summary: 'Highly recommended',
      reviewText: "It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "ProPlayer"
    },
    {
      summary: 'Highly recommended',
      reviewText: "It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "ProPlayer"
    },
    {
      summary: 'Highly recommended',
      reviewText: "It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "ProPlayer"
    },
    {
      summary: 'Highly recommended',
      reviewText: "It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "ProPlayer"
    },
    {
      summary: 'Highly recommended',
      reviewText: "It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "ProPlayer"
    },
  ];

  const cards = [
    <TestimonialCard
    summary='Highly recommended'
      reviewText="It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers"
      rating= {5}
      date= "AUG 22"
      author= "ProPlayer"
      index={0}
      key={0}/>,
      <TestimonialCard
    summary='Highly recommended'
      reviewText="It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers"
      rating= {5}
      date= "AUG 22"
      author= "ProPlayer"
      index={1}
      key={0}/>,
      <TestimonialCard
    summary='Highly recommended'
      reviewText="It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers"
      rating= {5}
      date= "AUG 22"
      author= "ProPlayer"
      index={2}
      key={0}/>,
      <TestimonialCard
    summary='Highly recommended'
      reviewText="It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers"
      rating= {5}
      date= "AUG 22"
      author= "ProPlayer"
      index={3}
      key={0}/>,
      <TestimonialCard
    summary='Highly recommended'
      reviewText="It`s real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers"
      rating= {5}
      date= "AUG 22"
      author= "ProPlayer"
      index={4}
      key={0}/>
  ]

  return (
    <section className="relative bg-black font-inter w-full overflow-hidden">
      {/* <img
        src="/assets/plutusLogo.png"
        alt="plutus logo"
        className="absolute right-0 -scale-x-100 w-[250px] h-[250px] pointer-events-none"
      /> */}

      {/* Title */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 pt-16">
          <span className="text-subheading text-white uppercase tracking-wider">TESTIMONIALS</span>{" "}
        </h2>
      </div>

      <div className='w-full hidden lg:block flex-col gap-4'>
        <CyclicCarousel>
          {cards}
        </CyclicCarousel>
        <div className='h-4'></div>
        <CyclicCarousel direction='right'>
          {cards}
        </CyclicCarousel>
      </div>

      <div className='w-full flex flex-col gap-4 lg:hidden p-4 h-full'>
        {cardData.map((item,index)=>(<TestimonialCard
          key={index}
          index={index} 
          summary={item.summary}  
          reviewText={item.reviewText}
          rating={item.rating}
          date={item.date}
          author={item.author}
        />))}
      </div>

      {/* Hide scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
