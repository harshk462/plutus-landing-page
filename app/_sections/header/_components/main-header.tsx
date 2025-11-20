'use client';
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/constants";
import { useState } from "react";

export function MainHeader() {
  const [videoLoaded,setVideoLoaded]=useState(false);
  return (
    <section className="relative w-full h-[calc(100dvh-5rem)] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
    <div className="lg:absolute inset-0 z-0">
       <video
          src="/assets/homepage-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={()=>setVideoLoaded(true)}
          className="w-full h-full object-cover"
        />
    </div>

    <div className="absolute lg:hidden inset-0 z-0">
      {/* <Image
        src="/assets/homepage-video-mobile.mp4"
        alt="Mobile background animation"
        fill
        className="object-cover"
        priority
      /> */}
      <video
          src="/assets/homepage-video-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={()=>setVideoLoaded(true)}
          className="w-full h-full object-cover"
        />
    </div>


      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(19, 1, 57, 0) 0%, #130139 66.33%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-36">
        {/* Main Text */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
          <h1 className="font-koulen font-normal text-[5rem] md:text-[6.25rem] lg:text-[8.75rem] leading-[80%] tracking-[-0.06em] text-center text-white">
            Play<span className="text-plutus-pink">.</span>
          </h1>
          <h1 className="font-koulen font-normal text-[5rem] md:text-[6.25rem] lg:text-[8.75rem] leading-[80%] tracking-[-0.06em] text-center text-white">
            Predict<span className="text-plutus-pink">.</span>
          </h1>
          <h1 className="font-koulen font-normal text-[5rem] md:text-[6.25rem] lg:text-[8.75rem] leading-[80%] tracking-[-0.06em] text-center text-white">
            Win Real
          </h1>
          <h1 className="font-koulen font-normal text-[5rem] md:text-[6.25rem] lg:text-[8.75rem] leading-[80%] tracking-[-0.06em] text-center text-white">
            Rewards<span className="text-plutus-pink">.</span>
          </h1>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row relative z-10 items-center justify-center gap-4 md:gap-6">
          {/* App Store */}
          <Link
            href={APP_STORE_URL}
            target="_blank"
            className={cn(
              "flex items-center gap-3 px-[0.6875rem] py-[0.1875rem] w-[11rem] h-[4rem] rounded-[0.60375rem] cursor-pointer",
              "bg-white/10 backdrop-blur-md border border-white/20",
              "hover:bg-white/15 transition-all duration-300",
              "shadow-lg shadow-black/20 overflow-hidden"
            )}
          >
            <Image
              src="/apple_logo.svg"
              alt="Apple Logo"
              width={29}
              height={36}
              className="object-contain"
            />
            <div className="flex flex-col items-start">
              <span className="text-white/60 text-xs leading-none">
                Download on the
              </span>
              <span className="text-white text-base font-medium leading-tight">
                App Store
              </span>
            </div>
          </Link>

          {/* Google Play */}
          <Link
            href={PLAY_STORE_URL}
            target="_blank"
            className={cn(
              "flex items-center gap-3 px-[0.6875rem] py-[0.1875rem] w-[11rem] h-[4rem] rounded-[0.60375rem] cursor-pointer",
              "bg-white/10 backdrop-blur-md border border-white/20",
              "hover:bg-white/15 transition-all duration-300",
              "shadow-lg shadow-black/20 overflow-hidden"
            )}
          >
            <Image
              src="/google_play_logo.svg"
              alt="Google Play Logo"
              width={30}
              height={33}
              className="object-contain"
            />
            <div className="flex flex-col items-start">
              <span className="text-white/60 text-xs leading-none">
                Get it on
              </span>
              <span className="text-white text-base font-medium leading-tight">
                Google Play
              </span>
            </div>
          </Link>
        </div>
      </div>

  
      <div className="absolute left-0 bottom-0 z-10 w-1/2 h-[220px] lg:w-1/3 lg:h-[420px]">
  <Image
    src="/left_side_predictions.png"
    alt="Left Side Predictions"
    fill
    className="object-cover"
  />
</div>

<div className="absolute right-0 bottom-0 z-10 w-1/2 h-[220px] lg:w-1/3 lg:h-[420px]">
  <Image
    src="/right_side_predictions.png"
    alt="Right Side Predictions"
    fill
    className="object-cover"
  />
</div>


    </section>
  );
}
