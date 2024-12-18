import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CSPostHogProvider } from "./_analytics/providers";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { Toaster } from "@/app/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "TattooAI",
    template: "TattooAI",
  },
  description: "TattooAI",
  openGraph: {
    title: "TattooAI",
    description: "TattooAI",
    url: baseUrl,
    siteName: "TattooAI",
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
        "text-zinc-950 bg-zinc-100 dark:text-zinc-100 dark:bg-zinc-950",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <CSPostHogProvider>
        <body className="antialiased max-w-xl mx-4 mt-8 sm:mx-auto">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2">
            <Navbar />
            {children}
            <Footer />
            <SpeedInsights />
          </main>
          <Toaster />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
