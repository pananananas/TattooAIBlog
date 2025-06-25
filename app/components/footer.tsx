"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

interface FooterProps {
  onScrollToSection: (sectionId: string) => void
}

export function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 lg:py-16">
      <div className="container mx-auto px-4 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Mobile-first layout */}
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
            {/* Brand Section */}
            <div className="space-y-3 lg:space-y-4 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <Image
                  src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2k7YyKJzbFynlcTW4Hm5VKaedwSfQjChPG6Xp"
                  alt="InkVision"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl lg:text-2xl font-amatic font-bold text-gray-800">InkVision</span>
              </div>
              <p className="text-gray-600 font-geist text-sm lg:text-base">
                Visualize your perfect tattoo before you ink with AI-powered technology.
              </p>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="text-xl lg:text-2xl font-amatic font-bold text-gray-800">Product</h4>
              <div className="space-y-3 font-geist">
                <button
                  onClick={() => onScrollToSection("features")}
                  className="block text-gray-600 hover:text-black transition-colors text-sm lg:text-base"
                >
                  Features
                </button>
                <button
                  onClick={() => onScrollToSection("faq")}
                  className="block text-gray-600 hover:text-black transition-colors text-sm lg:text-base"
                >
                  FAQ
                </button>
              </div>
            </div>

            {/* Company Links */}
            {/* <div className="space-y-4">
              <h4 className="text-xl lg:text-2xl font-amatic font-bold text-gray-800">Company</h4>
              <div className="space-y-3 font-geist">
                <button
                  onClick={() => onScrollToSection("team")}
                  className="block text-gray-600 hover:text-black transition-colors text-sm lg:text-base"
                >
                  Team
                </button>
                <div className="block text-gray-600 hover:text-black transition-colors text-sm lg:text-base">
                  Privacy Policy
                </div>
                <div className="block text-gray-600 hover:text-black transition-colors text-sm lg:text-base">
                  Terms of Service
                </div>
              </div>
            </div> */}

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xl lg:text-2xl font-amatic font-bold text-gray-800">Contact</h4>
              <div className="space-y-3 font-geist text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="break-all text-sm lg:text-base">hello@inkvision.app</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm lg:text-base">Wrocław, Poland</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 lg:mt-16 pt-6 lg:pt-8 text-center">
            <p className="text-gray-600 font-geist text-sm">
              © {new Date().getFullYear()} InkVision. All rights reserved. Built with ❤️ in Wrocław.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
