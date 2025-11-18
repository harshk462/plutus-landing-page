/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Map() {
  return (
    <section className="relative bg-black font-inter lg:px-4 py-24">
      {/* Left top logo */}
      <img
        src="/assets/plutusLogo.png"
        alt="plutus logo"
        className="absolute top-0 left-0 lg:w-[350px] lg:h-[350px] pointer-events-none"
      />

      {/* Section title */}
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12 pt-16">
        <span className="text-white uppercase tracking-wider">
          Where you can play Plutus?
        </span>
      </h2>

      {/* Map image */}
      <div className="flex justify-center">
        <img
          src="/assets/wherePlutus.svg"
          alt="where plutus"
          className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[700px] object-cover rounded-2xl"
        />
      </div>

      {/* Right bottom logo */}
      {/* <img
        src="/assets/plutusLogo.png"
        alt="plutus logo"
        className="absolute bottom-0 right-0 lg:w-[350px] lg:h-[350px] pointer-events-none scale-x-[-1] scale-y-[-1]"
      /> */}
    </section>
  );
}
