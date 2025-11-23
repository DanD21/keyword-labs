import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google'
import "./globals.css";
import { Spotlight, GridBackground } from "@/components/blocks/spotlight-new";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devchords.com";

export const metadata: Metadata = {
  title: {
    default: "Dev Chords - Custom Web Solutions That Perform",
    template: "%s | Dev Chords",
  },
  description:
    "Showcasing high-performance web development. Specializing in Web Development, Mobile Apps, AI Integration, Full-Stack Solutions, E-commerce, and SEO & GEO. This could be your site.",
  keywords: [
    "web development",
    "mobile apps",
    "AI integration",
    "full-stack development",
    "e-commerce solutions",
    "SEO",
    "GEO",
    "Next.js",
    "React",
    "TypeScript",
    "custom software",
  ],
  authors: [{ name: "Dan Danilescu", url: "https://www.linkedin.com/in/dan-danilescu/" }],
  creator: "Dev Chords",
  publisher: "Dev Chords",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Dev Chords - Custom Web Solutions That Perform",
    description:
      "High-performance web development showcasing modern tech stacks. From concept to launch and beyond.",
    siteName: "Dev Chords",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dev Chords - Custom Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Chords - Custom Web Solutions That Perform",
    description:
      "High-performance web development showcasing modern tech stacks. From concept to launch and beyond.",
    images: ["/og-image.png"],
    creator: "@devchords",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dev Chords",
    description:
      "Custom web development services specializing in high-performance web applications, mobile apps, and AI integration.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: ["https://www.linkedin.com/in/dan-danilescu/"],
    founder: {
      "@type": "Person",
      name: "Dan Danilescu",
      url: "https://www.linkedin.com/in/dan-danilescu/",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "AI Integration",
      "Full-Stack Development",
      "E-commerce Solutions",
      "SEO & GEO Optimization",
      "Technical Consulting",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-black/[0.96] antialiased relative overflow-x-hidden`}
      >
        <GridBackground />
        <Spotlight duration={12} />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
