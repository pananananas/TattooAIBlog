"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import BurgerIcon from "./ui/burger-icon";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Features", href: "#features" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "/blog", isExternal: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showGradient, setShowGradient] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const halfViewport = window.innerHeight / 2;
      const shouldShowGradient = window.scrollY > halfViewport;

      setShowGradient(shouldShowGradient);

      // Only track sections for internal navigation
      const sections = navItems
        .filter(item => !item.isExternal)
        .map((item) => item.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID ${elementId} not found`);
      return;
    }

    const offsetTop = element.getBoundingClientRect().top;
    const scrollOffset = 1;
    const offsetPosition = offsetTop + window.pageYOffset - scrollOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleNavClick = (href: string, isExternal?: boolean) => {
    setIsOpen(false);

    if (isExternal) {
      // Let the Link component handle external navigation
      return;
    }

    // If we're not on the main page, navigate there first
    if (pathname !== '/') {
      router.push('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const targetId = href.substring(1);
        scrollToSection(targetId);
      }, 500);
    } else {
      // We're already on the main page, just scroll
      setTimeout(() => {
        const targetId = href.substring(1);
        scrollToSection(targetId);
      }, 100);
    }
  };

  return (
    <nav className="mb-16 tracking-tight">
      <div className="fixed left-0 right-0 top-0 z-50 flex flex-col items-center justify-center">
        <div
          className="from-20 pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f0f0e6] via-[#f0f0e6]/85 transition-opacity duration-700 ease-in-out"
          style={{ opacity: showGradient ? 1 : 0 }}
        />

        <div className="container relative z-10 mx-auto w-full pt-2 lg:pt-6 px-6 md:px-20 xl:px-44">
          <div
            className={cn(
              "flex items-center justify-between rounded-[20px] border px-3 py-2 transition-all duration-700 ease-in-out",
              showGradient
                ? "border-gray-200 bg-[#f0f0e6]/90 backdrop-blur-sm"
                : "border-transparent bg-[#f0f0e6]/90 backdrop-blur-sm",
            )}
          >
            <button
              onClick={() => handleNavClick("#hero")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image
                src="https://utfs.io/a/oxjj5brc17/xNYugo9hq5N2k7YyKJzbFynlcTW4Hm5VKaedwSfQjChPG6Xp"
                alt="InkVision Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <div className="text-2xl font-amatic font-bold text-gray-800 pl-1">
                InkVision
              </div>
            </button>

            <div className="hidden space-x-2 md:flex">
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "cursor-pointer rounded-md px-3 py-1.5 transition-all hover:bg-gray-100/50",
                      "text-gray-700 hover:text-black font-geist text-sm lg:text-base"
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "cursor-pointer rounded-md px-3 py-1.5 transition-all hover:bg-gray-100/50",
                      activeSection === item.href.substring(1)
                        ? "text-black font-medium"
                        : "text-gray-700 hover:text-black",
                      "font-geist text-sm lg:text-base"
                    )}
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => handleNavClick("#waitlist")}
                className="bg-black text-white hover:bg-gray-800 font-geist text-sm lg:text-base hidden sm:block"
              >
                Join Waitlist
              </Button>

              <button
                ref={buttonRef}
                className="group md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <BurgerIcon isActive={isOpen} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="sync">
            {isOpen && (
              <>
                <motion.div
                  ref={menuRef}
                  className={cn(
                    "relative z-50 mt-2 overflow-hidden rounded-md md:hidden",
                    showGradient
                      ? "border border-gray-200"
                      : "border border-transparent",
                  )}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-md bg-[#f0f0e6]/95 backdrop-blur-sm" />

                  <div className="relative z-10 flex flex-col px-4 py-4">
                    {navItems.map((item, i) => (
                      item.isExternal ? (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.15,
                            delay: 0.05 * i,
                          }}
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              "block rounded-md px-3 py-3 text-sm hover:bg-gray-100/50",
                              "text-gray-700 hover:text-black font-geist"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ) : (
                        <motion.button
                          key={item.name}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href);
                          }}
                          className={cn(
                            "text-left rounded-md px-3 py-3 text-sm hover:bg-gray-100/50",
                            activeSection === item.href.substring(1)
                              ? "text-black font-medium"
                              : "text-gray-700 hover:text-black",
                            "font-geist"
                          )}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.15,
                            delay: 0.05 * i,
                          }}
                        >
                          {item.name}
                        </motion.button>
                      )
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.15,
                        delay: 0.05 * navItems.length,
                      }}
                      className="pt-2"
                    >
                                             <Button
                         onClick={() => handleNavClick("#waitlist")}
                         className="w-full bg-black text-white hover:bg-gray-800 font-geist text-sm"
                       >
                         Join Waitlist
                       </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
