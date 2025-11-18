import PlutusTextStyles from "@/components/shared/TextStyles/PlutusTextStyles";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LandingLogoProps {
  bgGradient?: boolean;
  logoTextColor?: string;
}

const LandingLogo: React.FC<LandingLogoProps> = ({
  bgGradient,
  logoTextColor = "text-black",
}) => (
  <Link
    prefetch={false}
    href="/"
    className="relative flex flex-shrink-0 scale-90 items-center gap-1 sm:scale-100 lg:gap-2"
  >
    <Image
      src="/Torus_cropped.png"
      alt="logo"
      width={50}
      height={50}
      className="w-[2rem] md:w-[2.5rem] lg:w-[3rem]"
    />
    {bgGradient && (
      <div className="absolute left-[20%] aspect-square h-full rounded-full bg-[rgba(149,66,232,0.85)] blur-2xl" />
    )}
    <div>
      <PlutusTextStyles
        font="mulish"
        size="lg"
        variant="normal"
        isItalic
        heading="h1"
        className={cn("font-extrabold leading-none text-black", logoTextColor)}
      >
        Plutus
      </PlutusTextStyles>
    </div>
  </Link>
);

export default LandingLogo;
