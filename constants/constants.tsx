import IconDiscord from "@/components/icons/IconDiscord";
import IconInstagram from "@/components/icons/IconInstagram";
import IconLinkedin from "@/components/icons/IconLinkedin";
import IconTiktok from "@/components/icons/IconTiktok";
import IconTwitterX from "@/components/icons/IconTwitterX";
import { useEffect, useState } from "react";

export const APP_STORE_URL = "https://apps.apple.com/us/app/plutus-play-games-win-cash/id6449448363";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.karata.unicohub";

const IsApple = () => {
    const [ios, setIos] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isMac = /Macintosh/.test(ua);

    if (isIOS || isMac) {
      setIos(true);
    }
  }, []);

  return ios;
}

export { IsApple as isApple };

export const faqAccordionDataMarketplace = [
  {
    value: "item-1",
    triggerText: "What are Prediction Markets?",
    content:
      "Prediction markets allow users to buy and sell shares of Yes or No on real world events and topics. Make predictions on topics across Tech, Sports, Movies, Music and more.",
  },
  {
    value: "item-2",
    triggerText: "Whats the difference between XP & Coins?",
    content:
      "XP is denominated as the free to play currency. You can play all casual games with XP and double them up for every win. XP can be redeemable for monthly rewards. Coins are the real money currency that you can top up and play games with. Winning more coins means you can redeem it for cash or real money rewards",
  },
  {
    value: "item-3",
    triggerText: "How do Cash Prize Games work?",
    content:
      "Plutus lets you play fast-paced strategy, arcade and sport games head to head against other players. You can play with coins, join with an entry fee and winning gets you the total pot wins back into your account. Play for cash now!",
  },
  {
    value: "item-4",
    triggerText: "What type of Games are available on Plutus?",
    content:
      "Plutus ensures all games  qualify as Games of Skill. We ensure the probability or chance frequency is limited to below 5%, each new game that Plutus launches is vetted across various parameters to ensure fair play and users are matched on several characteristics including frequency of gameplay, skill level, and spending tier.",
  },
  {
    value: "item-5",
    triggerText: "How to top-up my wallet?",
    content:
      "Tap the coins button on the top right or head to the rewards tab. You can get coins by purchasing a standard pack, weekly custom bundle packs or a custom amount. 100 Coins = $1. Top-up your wallet with Card, Cash App, Apple Pay, Gpay, Metamask or Coinbase.",
  },
  {
    value: "item-6",
    triggerText: "How do withdrawals work? ",
    content: "Head to the rewards page and click the withdraw option. You can withdraw a minimum of $50 at a time and up to $1000 on 7 day rolling period.  If you’re in the US you can withdraw via Bank Transfer, Credit/Debit Card, Gift Cards from over 100+ brands, USDC back to your wallet via our partners Metamask or Coinbase. Outside of the US we offer Gift Cards & USDC withdrawals."
  },
  {
    value: "item-7",
    triggerText: "Learn more about Locations, Privacy & Data flow on Plutus?",
    content: (
    <span className="">
      Visit our Terms & Conditions tab <a className="w-fit p-0 inline underline" href={"https://plutuslabs.notion.site/Terms-of-Service-b40eeb693458494e8cbc0322cb9f2e6b?source=copy_link"} target="_blank">here</a>. For Privacy Policy details check out this <a className="w-fit p-0 inline underline" href={"https://plutuslabs.notion.site/Privacy-Policy-1f2d83cdfcfc80de9e88f0cc5f0d8b02?source=copy_link"} target="_blank">link</a>. We also have a responsible gaming policy to ensure all <a className="w-fit p-0 inline underline" href={"https://plutuslabs.notion.site/Responsible-Gaming-Policy-1f2d83cdfcfc809ba088d7d2784e5e75?source=copy_link"} target="_blank">safety measures</a>.  For any other issues or to just chat contact us at <a className="w-fit p-0 inline underline" href={"mailto:support@plutus.gg"}>support@plutus.gg</a>.
    </span>
    )
  },
];


export const socialLinks = [
    {
        "name": "Discord",
        "icon": <IconDiscord fontSize={20} />,
        "href": "https://discord.gg/7kMFTNfSJH"
    },
    {
        "name": "Instagram",
        "icon": <IconInstagram fontSize={20} />,
        "href": "https://www.instagram.com/plutus.gg/"
    },
    {
        "name": "Tiktok",
        "icon": <IconTiktok fontSize={20} />,
        "href": "https://www.tiktok.com/@plutuslabsofficial?_t=ZT-8wn9lxuf4vr&_r=1"
    },
    {
        "name": "Linkedin",
        "icon": <IconLinkedin fontSize={20} />,
        "href": "https://www.linkedin.com/company/plutuslabs"
    },
    {
        "name": "Twitter",
        "icon": <IconTwitterX size={16} />,
        "href": "https://x.com/plutusgg1"
    },
]

export const footerLinks = [
    {
        "header": "Home",
        "links": [
            {
                "name": "Affiliates",
                "href": "#"
            },
            {
                "name": "Contact us",
                "href": "mailto:partnerships@plutus.gg"
            }
        ]
    },
    {
        "header": "Company",
        "links": [
            {
                "name": "Terms of Service",
                "href": "https://plutuslabs.notion.site/Terms-of-Service-b40eeb693458494e8cbc0322cb9f2e6b?source=copy_link"
            },
            {
                "name": "Privacy Policy",
                "href": "https://plutuslabs.notion.site/Privacy-Policy-1f2d83cdfcfc80de9e88f0cc5f0d8b02?source=copy_link"
            },
            {
                "name": "Responsible Gaming",
                "href": "https://plutuslabs.notion.site/Responsible-Gaming-Policy-1f2d83cdfcfc809ba088d7d2784e5e75?source=copy_link"
            }
        ]
    }
]
