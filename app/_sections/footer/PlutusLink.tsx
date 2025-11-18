

import { gradientMap } from "@/constants/gradients";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import * as React from "react";

interface ILink extends LinkProps {
  className?: string;
  icon?: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
  iconPosition?: "right" | "left";
  onClick?: () => void;
  gradient?: string;
  target?: string;
  rel?: string;
}

const PlutusLink = React.forwardRef<HTMLAnchorElement, ILink>(
  ({ href, target, className, icon, text, children, iconPosition, onClick, gradient, rel, ...props }, ref) => {
    const gradientClass = gradientMap[gradient || ""] || "";

    return (
      <Link
        href={href}
        ref={ref}
        {...props}
        className={cn(
          "flex items-center justify-center gap-2 rounded-[0.5rem] px-3 py-2",
          gradientClass,
          {
            "flex-row-reverse": iconPosition === "right",
          },
          className
        )}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {icon}
        {text}
        {children}
      </Link>
    );
  }
);

PlutusLink.displayName = "PlutusLink";

export { PlutusLink };
