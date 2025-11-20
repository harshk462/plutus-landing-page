import Image from "next/image";
import React from "react";

export default function Map() {
  return (
    <section className="relative bg-black">
      {/* Left top logo */}
      <Image src="https://cdn.plutus.gg/landing_page/assets/plutusLogo.png" alt="" className="absolute left-0" width={250} height={250}/>

      {/* Section title */}
      <h2 className="text-subheading text-center mb-[2rem] sm:mb-[3rem] px-4 sm:px-6 lg:px-8 pt-16">
        <span className="text-white uppercase tracking-wider">
          Where you can play Plutus?
        </span>
      </h2>

      {/* Map Image */}
      <div className="flex justify-center relative w-full">
        <div
          className="
            relative 
            w-full sm:w-4/5 md:w-3/4 
            lg:w-[90%] xl:w-[70%] 2xl:w-[61.25rem]
            aspect-[16/9]      /* Keeps svg ratio */
          "
        >
          <Image
            src="https://cdn.plutus.gg/landing_page/assets/wherePlutus.webp"
            alt="Where Plutus"
            fill
            className="object-contain rounded-2xl"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1024px) 80vw,
                   (max-width: 1280px) 75vw,
                   70vw"
          />
        </div>
      </div>

      {/* Optional right-bottom logo */}
      {/* 
      <div
        className="absolute bottom-0 right-0 pointer-events-none 
                   w-[12rem] h-[12rem]
                   sm:w-[16rem] sm:h-[16rem]
                   md:w-[20rem] md:h-[20rem]
                   lg:w-[21.875rem] lg:h-[21.875rem]"
      >
        <Image
          src="https://cdn.plutus.gg/landing_page/assets/plutusLogo.png"
          alt="plutus logo"
          fill
          className="object-contain scale-x-[-1] scale-y-[-1]"
        />
      </div> 
      */}
    </section>
  );
}
