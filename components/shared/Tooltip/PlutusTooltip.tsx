import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

class PlutusTooltipProps {
  triggerComponent: ReactNode;
  tooltipBody: ReactNode;
  triggerClassName?: string;
  bodyClassName?: string;
  position?: "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
}

const PlutusTooltip = React.forwardRef(
  (
    {
      triggerComponent,
      tooltipBody,
      triggerClassName,
      bodyClassName,
      position = "bottom",
      align = "end",
      sideOffset = 0,
      alignOffset = 0,
    }: PlutusTooltipProps,
    ref: any
  ) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <TooltipProvider>
        <Tooltip delayDuration={100} open={open} onOpenChange={setOpen}>
          <TooltipTrigger
            className={cn("", triggerClassName)}
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            onFocus={() => setTimeout(() => setOpen(true), 0)} // timeout needed to run this after onOpenChange to prevent bug on mobile
            onBlur={() => setOpen(false)}
          >
            {triggerComponent}
          </TooltipTrigger>
          <TooltipContent
            className={cn("", bodyClassName)}
            side={position}
            align={align}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
          >
            {tooltipBody}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
);

PlutusTooltip.displayName = "PlutusTooltip";

export default PlutusTooltip;
