import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import { Button } from "./ui/button";

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
    <aside className="-mx-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative rounded-md border border-zinc-300 dark:border-zinc-900 bg-zinc-100/85 dark:bg-zinc-950/85 text-xl"
          id="nav"
        >
          <div
            className={`flex flex-row space-x-0 pr-10 ${GeistMono.variable}`}
          >
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 cursor-pointer"
                >
                  <Button variant="ghost" className="cursor-pointer" size="sm">
                    {name}
                  </Button>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
