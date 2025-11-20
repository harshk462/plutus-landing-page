"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { href: "#games", label: "Games" },
  { href: "#support", label: "Support" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full mx-auto h-20 flex items-center justify-between px-4 md:px-6 lg:px-8 bg-black z-50">
      
      {/* Logo */}
      <Link href="#home" className="flex items-center gap-3">
        <Image
          src={"https://cdn.plutus.gg/landing_page/plutus-logo-transparent.png"}
          alt="Plutus Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <span
          className={cn(
            "font-mulish font-extrabold italic text-[28px] leading-[100%] tracking-[-0.06em] text-white"
          )}
        >
          Plutus
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-18-medium-inter leading-[100%] tracking-[-0.06em] text-white hover:text-neutral-300 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
