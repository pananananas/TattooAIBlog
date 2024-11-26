import { GeistMono } from "geist/font/mono";
import { Button } from "./ui/button";
import Link from "next/link";

const navItems = {
  "/": {
    name: "TattooAI",
  },
  "/blog": {
    name: "Blog",
  },
  "/contact": {
    name: "Contact",
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="fixed left-0 right-0 top-0 flex flex-col justify-center items-center bg-gradient-to-b dark:from-zinc-950 from-zinc-100 z-50">
        <div className=" p-4 lg:w-1/2 w-full">
          <nav
            className="flex flex-row items-start md:overflow-auto md:relative rounded-md border border-zinc-300 dark:border-zinc-900 bg-zinc-100/85 dark:bg-zinc-950/85 text-xl"
            id="nav"
          >
            <div
              className={`flex flex-row gap-0 items-center ${GeistMono.variable}`}
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              <Link
                key={"/"}
                href={"/"}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex pl-4 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width={28}
                  height={28}
                  strokeWidth={1.5}
                  className=""
                >
                  <path d="M3 21c-.667 -.667 3.262 -6.236 11.785 -16.709a3.5 3.5 0 1 1 5.078 4.791c-10.575 8.612 -16.196 12.585 -16.863 11.918z" />
                  <path d="M17.5 6.5l-1 1" />
                  <path d="M17 7c-2.333 -2.667 -3.5 -4 -5 -4s-2 1 -2 2c0 4 8.161 8.406 6 11c-1.056 1.268 -3.363 1.285 -5.75 .808" />
                  <path d="M5.739 15.425c-1.393 -.565 -3.739 -1.925 -3.739 -3.425" />
                  <path d="M19.5 9.5l1.5 1.5" />
                </svg>
              </Link>
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex py-1.5 p-r2 cursor-pointer"
                  >
                    <Button
                      variant="ghost"
                      className="cursor-pointer font-bold"
                      size="sm"
                    >
                      {name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
}
