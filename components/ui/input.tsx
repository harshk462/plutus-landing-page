"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import PlutusTooltip from "../shared/Tooltip/PlutusTooltip";
import { InfoIcon } from "lucide-react";
import IconCloseCircle from "../icons/IconCloseCircle";
import IconTick from "../icons/IconTick";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  image?: {
    src: string;
    maxHeight: number;
    maxWidth: number;
    alt: string;
    className?: string;
  };
  icon?: React.ReactNode;
  prefixText?: string;
  prefixTextClassName?: string;
  inputClassName?: string;
  rounded?: string;
  tooltip?: {
    body: React.ReactNode;
    trigger?: React.ReactNode;
    bodyClassName?: string;
    triggerClassName?: string;
    position?: "top" | "bottom";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
  };
  error?: string;
  success?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, image, icon, prefixText, prefixTextClassName, inputClassName, rounded, tooltip, success, error, ...props }, ref) => {
    return (
      <div className={cn("font-rubik", className)}>
        {label && <label htmlFor={props.id}>{label}</label>}
        <div
          className={cn(
            "flex items-center",
            icon ? "px-1" : "",
            {
              "rounded-lg border border-neutral-500 px-3 py-1": image || prefixText,
              "!border-2 !border-success !text-success": (image || prefixText) && success,
              "!border-2 !border-red-500 !text-red-500": (image || prefixText) && error,
              "mt-1": label,
            },
            image || prefixText ? inputClassName : ""
          )}
        >
          {image ? (
            <Image src={image.src} width={image.maxWidth} height={image.maxHeight} alt={image.alt} className={cn("mr-2", image.className)} />
          ) : (
            icon
          )}
          {prefixText && <span className={cn("mr-2 text-sm text-black lg:text-base whitespace-nowrap", prefixTextClassName)}>{prefixText}</span>}
          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md bg-background font-rubik text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              {
                "border border-neutral-500 px-4 py-3": !image && !prefixText,
                "!border-2 !border-success !text-success": !image && !prefixText && success,
                "!border-2 !border-red-500 !text-red-500": !image && !prefixText && error,
              },
              image || prefixText ? "" : inputClassName,
            )}
            ref={ref}
            {...props}
          />
          {tooltip && (
            <PlutusTooltip
              position={tooltip.position}
              align={tooltip.align}
              sideOffset={tooltip.sideOffset}
              alignOffset={tooltip.alignOffset}
              tooltipBody={tooltip.body}
              triggerComponent={tooltip.trigger ? tooltip.trigger : <InfoIcon size={18} className={cn("ml-2 cursor-pointer text-gray-600")} />}
            />
          )}
        </div>
        {error ? (
          <span className="mt-1 flex items-center gap-2 font-poppins text-sm font-semibold lowercase text-red-500">
            <IconCloseCircle className="size-5 text-red-500" />
            {error}
          </span>
        ) : success ? (
          <span className="mt-1 flex items-center gap-2 font-poppins text-sm font-semibold lowercase text-success">
            <span className="rounded-full bg-success">
              <IconTick color="white" fontSize={15} />
            </span>
            {success}
          </span>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
