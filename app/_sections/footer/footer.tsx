"use client";


import LandingLogo from "./LandingLogo";
import Image from "next/image";
import DownloadAppComponent from "./DownloadAppComponent";
import { cn } from "@/lib/utils";

;
import Newsletter from "./newsletter";
import { PlutusLink } from "./PlutusLink";
import { footerLinks, isApple, APP_STORE_URL, PLAY_STORE_URL, socialLinks } from "@/constants/constants";

function BackedBy() {
    return(
        <div className="flex flex-col justify-start gap-2 px-4">
            <p className="text-body opacity-30">Backed by</p>
            <div className="flex items-center gap-10">
                <Image src="/svgIcons/a16z.svg" alt="logo" width={100} height={100} className="opacity-30" />
                <Image src="/svgIcons/konvoy.svg" alt="logo" width={60} height={60} className="opacity-30" />
            </div>
        </div>
    )
}

function FooterLinksMapped() {
    return(
        <div className="flex gap-10">
            {footerLinks.map((link) => (
                <div key={link.header} className="flex flex-col gap-2">
                    <p className="text-white text-sm font-medium">{link.header}</p>
                    <div className="flex flex-col gap-2 text-white/70">
                        {link.links.map((link) => (
                            <PlutusLink
                                href={link.name === "Affiliates" ? (isApple() ? APP_STORE_URL : PLAY_STORE_URL) : link.href} 
                                key={link.name}
                                target="_blank"
                                className="text-white/70 text-sm p-0 justify-start"
                            >
                                {link.name}
                            </PlutusLink>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function LandingFooter() {

    const footerBackground = "bg-[radial-gradient(50%_50%_at_50%_50%,#130014_0%,#310F3D_100%)]";

    return (
        <footer id="support" className={cn("w-[94dvw] mx-auto mb-10 rounded-[24px] px-4 md:px-10 py-8", footerBackground)}>
            
            <div className="flex md:flex-row flex-col gap-10 md:gap-0 justify-between">   
                <div className="flex flex-col gap-10">
                    <div>
                        <div className="flex">
                            <LandingLogo logoTextColor="text-white" />
                        </div>
                        <p className="text-white/70 text-sm my-3">The Creator Led Gaming App</p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <PlutusLink
                                    href={link.href}
                                    key={link.name}
                                    className="p-0 text-white/70"
                                >
                                    {link.icon}
                                </PlutusLink>
                            ))}
                        </div>
                    </div>
                    <DownloadAppComponent 
                        className="items-start" 
                        titleClassName="md:text-sm"
                        buttonClassName="md:py-1 md:px-3"
                    />
                </div>
                            
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col lg:flex-row md:justify-between gap-10">
                        <FooterLinksMapped />
                        <BackedBy />
                    </div>

                    <Newsletter />
                </div>
            </div>

            <div className="border-t border-white/5 text-white/70 md:text-sm text-xs flex justify-between pt-4 mt-6">
                <span className="whitespace-nowrap">@2025 Plutus Labs, Inc.</span>
                <span className="flex flex-col items-end text-right">
                    <span>1209 Orange Street, Wilmington,</span>
                    <span>Delaware, USA, 19801</span>
                </span>
            </div>
        </footer>
    )
}