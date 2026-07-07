"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  {
    name: "Home Inspections",
    href: "/home-inspections",
  },
  {
    name: "Engineering Services",
    href: "/engineering-services",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#102A43]/95 backdrop-blur-md shadow-lg"
          : "bg-[#102A43]"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div>
            <h1 className="text-5xl font-bold leading-none text-white">
              TrueNorth
            </h1>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4A63A]">
              BUILDING SCIENCE
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors ${
                  active
                    ? "text-[#D4A63A]"
                    : "text-white hover:text-[#D4A63A]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/book-inspection">
            <Button className="rounded-full bg-gradient-to-b from-[#D4A63A] to-[#B58420] px-8 py-6 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
              Book an Inspection
            </Button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#102A43] lg:hidden">
          <div className="flex flex-col px-6 py-6">
            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 text-lg transition ${
                    active
                      ? "text-[#D4A63A]"
                      : "text-white hover:text-[#D4A63A]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/book-inspection"
              onClick={() => setMobileOpen(false)}
            >
              <Button className="mt-6 w-full rounded-full bg-gradient-to-b from-[#D4A63A] to-[#B58420] py-6 text-lg font-semibold">
                Book an Inspection
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}