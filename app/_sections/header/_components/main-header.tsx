'use client';
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MainHeader() {
  return (
    <section className="relative w-full h-[calc(100dvh-5rem)] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/header_background_games.png"
          alt="Header Background"
          fill
          className="object-cover"
          priority
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
            href="https://apps.apple.com/app/plutus-predict-win-real/id6754492902"
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
            href="https://play.google.com/store/apps/details?id=com.plutus.app"
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

      {/* Side Images */}
      {/* Left Image */}
{/* Left Image */}
{/* Left Image */}
{/* Left Image */}
<div className="absolute left-0 bottom-0 z-10 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
  <Image
    src="/left_side_predictions.png"
    alt="Left Side Predictions"
    fill
    className="object-cover"
  />
</div>

{/* Right Image */}
<div className="absolute right-0 bottom-0 z-10 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
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
