"use client";

import { cn } from "@/lib/utils";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/constants";
import AppDownloadButton from "./AppDownloadButton";
import IconPlay from "@/components/icons/IconPlay";
import IconApple from "@/components/icons/IconApple";


interface DownloadAppComponentProps {
    className?: string;
    titleClassName?: string;
    buttonClassName?: string;
}

export default function DownloadAppComponent({ className, titleClassName, buttonClassName }: DownloadAppComponentProps) {
    return(
        <div className={cn("relative z-[6] flex flex-col items-end gap-4 text-white", className)}>
            <div className={cn("text-sm md:text-base", titleClassName)}>
                Download Plutus now - the game is on!
            </div>
            <div className="flex gap-4">
                <AppDownloadButton
                    icon={<IconPlay className="text-black w-6 h-6 md:w-8 md:h-8" />} 
                    text="get it on" 
                    subtext="Google Play"
                    className={buttonClassName}
                    href={PLAY_STORE_URL}
                />
                <AppDownloadButton 
                    icon={<IconApple className="text-black w-6 h-6 md:w-8 md:h-8" />} 
                    text="download on"
                    subtext="App Store"
                    className={buttonClassName}
                    href={APP_STORE_URL}
                />
            </div>
        </div>
    )
}