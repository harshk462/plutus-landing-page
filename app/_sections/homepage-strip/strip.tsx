import IconGamepad from "@/components/icons/IconGamepad";
import IconLightning from "@/components/icons/IconLightning";
import IconShield from "@/components/icons/IconShield";
import React from "react";

interface IFeatureItem {
  icon: React.ElementType;
  iconColor?: string;
  playerCount: string;
  description: string;
}

const FeatureItem = ({
  icon: Icon,
  iconColor = "pink",
  playerCount,
  description,
}: IFeatureItem) => (
  <div className="flex flex-col items-center text-center flex-1 min-w-0">
    <h3 className="text-title uppercase mb-2 sm:mb-4 tracking-wide truncate">
      {playerCount}
    </h3>
    <div className="flex items-center gap-2 lg:gap-4">
      <div
        className={`flex items-center justify-center rounded-full text-white 
        p-2 lg:p-4 ${iconColor === "pink" ? "bg-[#FF69EB]" : iconColor}`}
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-10 lg:h-10" />
      </div>
      <p className="text-28-regular font-koulen uppercase tracking-wider truncate">
        {description}
      </p>
    </div>
  </div>
);

export default function HeaderStrip() {
  const featuresData = [
    {
      playerCount: "1M+ Downloads",
      description: "100% Skill-Based Gameplay",
      icon: IconGamepad,
    },
    {
      playerCount: "500K+ Active Players",
      description: "INSTANT WITHDRAWALS",
      icon: IconLightning,
    },
    {
      playerCount: "500K+ Players",
      description: "LICENSED & COMPLIANT",
      icon: IconShield,
    },
  ];

  return (
    <section className="bg-[linear-gradient(90deg,_#870075_-76.84%,_#100134_110.8%)] py-10 sm:py-16">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10 md:gap-16 w-full">
  {featuresData.map((feature, index) => (
    <React.Fragment key={index}>
      <FeatureItem
        icon={feature.icon}
        playerCount={feature.playerCount}
        description={feature.description}
      />
      {/* Divider: horizontal on mobile, vertical on sm+ */}
      {index < featuresData.length - 1 && (
        <div className="w-full sm:w-px h-px sm:h-24 bg-[#FF69EB] my-2 sm:my-0" />
      )}
    </React.Fragment>
  ))}
</div>

      </div>
    </section>
  );
}
