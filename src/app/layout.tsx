import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google'
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Keyword Labs - AI-Powered SEO Revolution",
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
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
