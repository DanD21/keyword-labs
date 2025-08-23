import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google'
import "./globals.css";
import { Spotlight, GridBackground } from "@/components/blocks/spotlight-new";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Keyword Labs - AI-Powered GEO Revolution",
  description: "We put AI at the center of SEO strategy. Your trusted partner in dominating search rankings with intelligent automation.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-black/[0.96] antialiased relative overflow-x-hidden`}>
        <GridBackground />
        <Spotlight duration={12} />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
