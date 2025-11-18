import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MainHeader() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden">
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

      {/* Content - Above overlay */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-36">
        {/* Main Text - Centered both X and Y */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
          <h1 className="font-koulen font-normal text-[80px] md:text-[100px] lg:text-[140px] leading-[80%] tracking-[-0.06em] text-center text-white">
            Play<span className="text-plutus-pink">.</span>
          </h1>
          <h1 className="font-koulen font-normal text-[80px] md:text-[100px] lg:text-[140px] leading-[80%] tracking-[-0.06em] text-center text-white">
            Predict<span className="text-plutus-pink">.</span>
          </h1>
          <h1 className="font-koulen font-normal text-[80px] md:text-[100px] lg:text-[140px] leading-[80%] tracking-[-0.06em] text-center text-white">
            Win Real
          </h1>
          <h1 className="font-koulen font-normal text-[80px] md:text-[100px] lg:text-[140px] leading-[80%] tracking-[-0.06em] text-center text-white">
            Rewards<span className="text-plutus-pink">.</span>
          </h1>
        </div>

        {/* Download Buttons - Side by side with gap */}
        <div className="flex flex-col sm:flex-row relative z-10 items-center justify-center gap-4 md:gap-6">
          {/* App Store Button */}
          <Link
            href="https://apps.apple.com/app/plutus-predict-win-real/id6754492902"
            target="_blank"
            className={cn(
              "flex items-center gap-3 px-4 py-3 w-[176px] h-[64px] rounded-[9.66px] cursor-pointer",
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

          {/* Google Play Button */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.plutus.app"
            target="_blank"
            className={cn(
              "flex items-center gap-3 px-4 py-3 w-[176px] h-[64px] rounded-[9.66px] cursor-pointer",
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
      <div className="absolute left-0 bottom-0 z-10 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-xl h-auto">
        <Image
          src="/left_side_predictions.png"
          alt="Left Side Predictions"
          width={500}
          height={500}
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="absolute right-0 bottom-0 z-10 w-full max-w-64 sm:max-w-sm md:max-w-lg lg:max-w-xl h-auto">
        <Image
          src="/right_side_predictions.png"
          width={500}
          alt="Right Side Predictions"
          height={500}
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  );
}
