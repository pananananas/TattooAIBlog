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
      <div className="fixed left-0 right-0 top-0 flex flex-col justify-center items-center bg-gradient-to-b from-zinc-950">
        <div className=" p-4 lg:w-1/2 w-full">
          <nav
            className="flex flex-row items-start md:overflow-auto md:relative rounded-md border border-zinc-300 dark:border-zinc-900 bg-zinc-100/85 dark:bg-zinc-950/85 text-xl"
            id="nav"
          >
            <div className={`flex flex-row gap-0 ${GeistMono.variable}`}>
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex py-1.5 pl-2 cursor-pointer"
                  >
                    <Button
                      variant="ghost"
                      className="cursor-pointer"
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
