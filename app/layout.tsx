import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "./components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CSPostHogProvider } from "./_analytics/providers";
import { Amatic_SC } from "next/font/google";
import { baseUrl } from "./sitemap";
import { Toaster } from "@/app/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "InkVision - Visualize Tattoos on Your Skin",
  description:
    "Explore thousands of tattoo designs, create moodboards, and visualize how tattoos will look on your skin before making the commitment",
  openGraph: {
    title: "InkVision - Visualize Tattoos on Your Skin",
    description:
      "Explore thousands of tattoo designs, create moodboards, and visualize how tattoos will look on your skin before making the commitment",
    url: baseUrl,
    siteName: "InkVision",
    locale: "en_US",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/icon.ico" }],
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

// Configure Amatic SC with proper variable
const amaticSC = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amatic",
  display: "swap",
});

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-cream/99",
        GeistSans.variable,
        GeistMono.variable,
        amaticSC.variable
      )}
    >
      <head>
        {/* Preload critical hero images for instant loading */}
        <link
          rel="preload"
          as="image"
          href="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2lD3EIhskXiywK8rx16T2C7sSqh5jEmtdpg3L"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2ibOzW4e0zBWo1nIYFrOc7txGqpKdim0Cu9Pe"
          fetchPriority="high"
        />

        {/* Preload fonts for Safari compatibility */}
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/geist@1.2.2/dist/fonts/geist-mono/Geist-Mono-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/geist@1.2.2/dist/fonts/geist-mono/Geist-Mono-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <CSPostHogProvider>
        <body className="antialiased">
          <Navbar />
          {children}
          <SpeedInsights />
          <Toaster />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
