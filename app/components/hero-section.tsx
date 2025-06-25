"use client";

import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="container mx-auto px-6 lg:px-48 py-16 lg:py-24"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <Image
            src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2lD3EIhskXiywK8rx16T2C7sSqh5jEmtdpg3L"
            alt="InkVision App Mockup"
            width={400}
            height={600}
            className="max-w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 order-2 lg:order-1"
        >
          <div className="space-y-4">
            <Image
              src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2ibOzW4e0zBWo1nIYFrOc7txGqpKdim0Cu9Pe"
              alt="InkVision - Visualize tattoos on your skin"
              width={500}
              height={200}
              className="max-w-full h-auto w-1/2 lg:w-full hidden lg:block"
            />
            <p className="text-md lg:text-xl text-gray-600 font-geist leading-relaxed">
              Explore tattoo designs, create moodboards, and visualize how
              tattoos will look on your skin before making the commitment!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => onScrollToSection("why-building")}
              variant="outline"
              size="lg"
              className="bg-white text-black border-black hover:bg-gray-50 font-geist text-lg px-8 py-3"
            >
              How it works? <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => onScrollToSection("waitlist")}
              size="lg"
              className="bg-black text-white hover:bg-gray-800 font-geist text-lg px-8 py-3"
            >
              Try on tattoo!
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
