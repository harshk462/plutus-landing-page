import type { Metadata } from "next";
import { Koulen, Inter, Mulish } from "next/font/google";
import "./globals.css";

const koulen = Koulen({
  variable: "--font-koulen",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plutus Landing Page",
  description: "Plutus Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${koulen.variable} ${inter.variable} ${mulish.variable} antialiased`}
      >
        <main className="size-full bg-neutral-950 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
