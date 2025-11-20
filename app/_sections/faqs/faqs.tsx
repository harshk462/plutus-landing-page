"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "What are Prediction Markets?",
      answer: (
        <>
          Prediction markets allow users to buy and sell shares of Yes or No on real world events and topics. 
          Make predictions on topics across Tech, Sports, Movies, Music and more.
        </>
      ),
    },
    {
      question: "Whats the difference between XP & Coins?",
      answer: (
        <>
          XP is denominated as the free to play currency. You can play all casual games with XP and double them up for every win. 
          XP can be redeemable for monthly rewards. Coins are the real money currency that you can top up and play games with. 
          Winning more coins means you can redeem it for cash or real money rewards.
        </>
      ),
    },
    {
      question: "How do Cash Prize Games work?",
      answer: (
        <>
          Plutus lets you play fast-paced strategy, arcade and sport games head to head against other players. 
          You can play with coins, join with an entry fee and winning gets you the total pot wins back into your account. 
          Play for cash now!
        </>
      ),
    },
    {
      question: "What type of Games are available on Plutus?",
      answer: (
        <>
          Plutus ensures all games qualify as Games of Skill. We ensure the probability or chance frequency is limited to below 5%, 
          each new game that Plutus launches is vetted across various parameters to ensure fair play and users are matched on several characteristics 
          including frequency of gameplay, skill level, and spending tier.
        </>
      ),
    },
    {
      question: "How to top-up my wallet?",
      answer: (
        <>
          Tap the coins button on the top right or head to the rewards tab. You can get coins by purchasing a standard pack, 
          weekly custom bundle packs or a custom amount. 100 Coins = $1. Top-up your wallet with Card, Cash App, Apple Pay, 
          Gpay, Metamask or Coinbase.
        </>
      ),
    },
    {
      question: "How do withdrawals work?",
      answer: (
        <>
          Head to the rewards page and click the withdraw option. You can withdraw a minimum of $50 at a time and up to $1000 on a 7-day rolling period. 
          If you’re in the US you can withdraw via Bank Transfer, Credit/Debit Card, Gift Cards from over 100+ brands, USDC back to your wallet via our partners Metamask or Coinbase. 
          Outside of the US we offer Gift Cards & USDC withdrawals.
        </>
      ),
    },
    {
      question: "Learn more about Locations, Privacy & Data flow on Plutus?",
      answer: (
        <>
          Visit our Terms & Conditions tab{" "}
          <a
            className="underline"
            href="https://plutuslabs.notion.site/Terms-of-Service-b40eeb693458494e8cbc0322cb9f2e6b?source=copy_link"
            target="_blank"
          >
            here
          </a>
          . For Privacy Policy details check out this{" "}
          <a
            className="underline"
            href="https://plutuslabs.notion.site/Privacy-Policy-1f2d83cdfcfc80de9e88f0cc5f0d8b02?source=copy_link"
            target="_blank"
          >
            link
          </a>
          . We also have a responsible gaming policy to ensure all{" "}
          <a
            className="underline"
            href="https://plutuslabs.notion.site/Responsible-Gaming-Policy-1f2d83cdfcfc809ba088d7d2784e5e75?source=copy_link"
            target="_blank"
          >
            safety measures
          </a>
          . For any other issues or to just chat contact us at{" "}
          <a className="underline" href="mailto:support@plutus.gg">
            support@plutus.gg
          </a>
          .
        </>
      ),
    },
  ];


  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Answer=({ children }: { children: React.ReactNode })=> {
    return (
      <div className="text-18-regular-inter">
        <p className="text-[#676767]">{children}</p>
      </div>
    );
  }

  return (
    <section className="bg-black py-16 sm:py-24 font-inter" id="about">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-subheading text-white mb-4">
            GOT ANY QUESTIONS?
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-white text-24-medium-inter pr-4">
                  {index + 1}. {item.question}
                </span>

                <div
                  className={`hidden lg:flex flex-shrink-0 w-14 h-14 rounded-tr-[0.5rem] rounded-br-[0.5rem]  items-center justify-center transition-all duration-300 cursor-pointer ${
                    openIndex === index ? "bg-[#FF69EB]" : "bg-[#2a2a2a]"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" strokeWidth={3} />
                  ) : (
                    <Plus className="w-5 h-5 text-white" strokeWidth={3} />
                  )}
                </div>

              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 text-24-regular-inter">
                  <Answer>
                    {item.answer}
                  </Answer>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
