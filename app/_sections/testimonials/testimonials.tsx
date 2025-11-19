'use client';
import React from 'react'
import TestimonialCard from './_components/testimonial-card'
import CyclicCarousel from '@/components/ui/cyclic-carousel';
import Carousel from '@/components/ui/carousel-2';

export default function Testimonials() {
  const cardData = [
  {
    summary: "Its extremely engaging",
    reviewText:
      "It's real bets being placed and if you don't have coins you're aloud to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
    rating: 5,
    date: "AUG 22",
    author: "Tonstersir",
  },
  {
    summary: "I think the games are alright",
    reviewText:
      "I've been planning to have for a couple days so far it's far and it doesn't look like nobody is cheating. All I need to check now is cashing out.",
    rating: 5,
    date: "SEP 26",
    author: "coolrichrich",
  },
  {
    summary: "Friendly for beginners",
    reviewText:
      "I had to figure things out on my own at first, but once I got used to it, the app became really fun. Tutorial pop-ups for new users would help a lot.",
    rating: 5,
    date: "SEP 19",
    author: "Tyrhonda Mielnikulqtin",
  },
  {
    summary: "Cant complain except need higher referral bonus",
    reviewText:
      "Plutus works as promised. Easy to use, fair, and transparent. Wish the referral bonuses were a bit higher to make it more exciting.",
    rating: 5,
    date: "AUG 22",
    author: "taunia-flaverty 1987pzyc",
  },
  {
    summary: "Smooth design",
    reviewText:
      "The UI is minimal and distraction-free, no annoying ads or clutter. Adding a light mode option would make it even better for day use",
    rating: 5,
    date: "SEP 22",
    author: "夷荀闵危",
  },
];


  const cards = [
    <TestimonialCard
    summary='Its extremely engaging'
      reviewText="It's real bets being placed and if you don't have coins you're aloud to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers"
      rating= {5}
      date= "AUG 22"
      author= "Tonstersir"
      index={0}
      key={0}/>,
      <TestimonialCard
    summary='I think the games are alright'
      reviewText="I've been planning to have for a couple days so far it's far and it doesn't look like nobody is cheating. All I need to check now is cashing out."
      rating= {5}
      date= "SEP 26"
      author= "coolrichrich"
      index={1}
      key={0}/>,
      <TestimonialCard
    summary='Friendly for beginners'
      reviewText="I had to figure things out on my own at first, but once I got used to it, the app became really fun. Tutorial pop-ups for new users would help a lot."
      rating= {5}
      date= "SEP 19"
      author= "Tyrhonda Mielnikulqtin"
      index={2}
      key={0}/>,
      <TestimonialCard
    summary='Cant complain except need higher referral bonus'
      reviewText="Plutus works as promised. Easy to use, fair, and transparent. Wish the referral bonuses were a bit higher to make it more exciting."
      rating= {5}
      date= "AUG 22"
      author= "taunia-flaverty 1987pzyc"
      index={3}
      key={0}/>,
      <TestimonialCard
    summary='Smooth design'
      reviewText="The Ul is minimal and distraction-free, no annoying ads or clutter. Adding a light mode option would make it even better for day use"
      rating= {5}
      date= "SEP 22"
      author= "夷荀闵危"
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
