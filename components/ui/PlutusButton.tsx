
import { gradientMap } from "@/constants/gradients";
import { cn } from "@/lib/utils";
import * as React from "react";

interface IPlutusButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
  iconPosition?: "right" | "left";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  gradient?: string;
}

const PlutusButton = React.forwardRef<HTMLButtonElement, IPlutusButton>(
  ({ className, icon, text, children, iconPosition, onClick, gradient, ...props }, ref) => {
    const gradientClass = gradientMap[gradient || ""] || "";

    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "flex items-center justify-center gap-2 rounded-[10px] px-3 py-2 font-poppins disabled:cursor-not-allowed disabled:opacity-50",
          gradientClass,
          {
            "flex-row-reverse": iconPosition === "right",
          },
          className
        )}
        onClick={onClick}
      >
        {icon}
        {text}
        {children}
      </button>
    );
  }
);

PlutusButton.displayName = "PlutusButton";

export { PlutusButton };
