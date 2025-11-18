"use client";


import { textClasses } from "@/lib/customClasses";
import { cn } from "@/lib/utils";
import { PlutusTextStylesProps } from "@/types";

import React, { useState } from "react";

const PlutusTextStyles = React.forwardRef(
  (
    {
      children,
      variant = "normal",
      size = "md",
      font = "manrope",
      isItalic = false,
      className = "",
      heading = "h1",
      gradient,
      shouldApplyEllipsis = false,
    }: PlutusTextStylesProps,
    ref: any
  ) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const Tag = heading; // Use the heading prop to determine the tag type

    const handleToggleExpand = () => {
      setIsExpanded((prev) => !prev);
    };

    return (
      <Tag
        ref={ref}
        style={
          shouldApplyEllipsis && !isExpanded
            ? {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }
            : {}
        }
        className={cn(
          textClasses[size],
          {
            "font-mulish": font === "mulish",
            "font-manrope": font === "manrope",
            "font-poppins": font === "poppins",
            "font-rubik": font === "rubik",
            "font-roboto": font === "roboto",
            "font-raleway": font === "raleway",
            "font-dmsans": font === "dmsans",
            "font-inter": font === "inter",
            "font-notosans": font === "notosans",
            italic: isItalic,
            "bg-clip-text text-transparent": variant === "gradient",
          },
          gradient,
          className
        )}
        onClick={shouldApplyEllipsis ? handleToggleExpand : undefined} // Add onClick handler
      >
        {children}
      </Tag>
    );
  }
);

PlutusTextStyles.displayName = "PlutusTextStyles";

export default PlutusTextStyles;
