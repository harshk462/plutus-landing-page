
import { cn } from "@/lib/utils";
import { PlutusLink } from "./PlutusLink";

interface AppDownloadButtonProps {
    icon: React.ReactNode;
    text: string;
    subtext: string;
    className?: string;
    href: string;
}

export default function AppDownloadButton({ icon, text, subtext, href, className }: AppDownloadButtonProps) {
    return (
        <PlutusLink href={href} target="_blank" rel="noopener noreferrer" className={cn("rounded-[12px] bg-white text-black px-2 lg:px-4 py-1 md:py-2 flex items-center gap-1 lg:gap-2 w-fit", className)}>
            <div>
                {icon}
            </div>
            <div>
                <p className="text-xs font-medium uppercase">{text}</p>
                <p className="font-semibold">{subtext}</p>
            </div>
        </PlutusLink>
    )
}