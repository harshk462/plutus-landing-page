/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Map() {
  return (
    <section className="relative bg-black pt-16">
      {/* Left top logo */}
      <img
        src="/assets/plutusLogo.png"
        alt="plutus logo"
        className="absolute top-0 left-0 pointer-events-none
                   w-[12rem] h-[12rem]       /* default mobile */
                   sm:w-[16rem] sm:h-[16rem] /* small screens */
                   md:w-[20rem] md:h-[20rem] /* medium screens */
                   lg:w-[21.875rem] lg:h-[21.875rem]" /* large screens */
      />

      {/* Section title */}
      <h2 className="text-subheading text-center mb-[2rem] sm:mb-[3rem] px-4 sm:px-6 lg:px-8">
        <span className="text-white uppercase tracking-wider">
          Where you can play Plutus?
        </span>
      </h2>

      {/* Map image */}
      <div className="flex justify-center">
  <img
    src="/assets/wherePlutus.svg"
    alt="where plutus"
    className="w-full sm:w-4/5 md:w-3/4 
               lg:w-[90%] xl:w-[70%] 2xl:w-[61.25rem]
               object-cover rounded-2xl"
  />
</div>


      {/* Right bottom logo (optional) */}
      {/* <img
        src="/assets/plutusLogo.png"
        alt="plutus logo"
        className="absolute bottom-0 right-0 pointer-events-none 
                   w-[12rem] h-[12rem] 
                   sm:w-[16rem] sm:h-[16rem]
                   md:w-[20rem] md:h-[20rem]
                   lg:w-[21.875rem] lg:h-[21.875rem] scale-x-[-1] scale-y-[-1]"
      /> */}
    </section>
  );
}
