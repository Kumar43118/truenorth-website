"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { name: "Home Inspections", href: "#services" },
  { name: "Engineering Services", href: "#engineering" },
  { name: "Resources", href: "#resources" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#102A43]/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/10"
          : "bg-[#102A43]/75 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-8 lg:px-12">
        {/* Logo */}
        <a href="#" className="group">
          <h2 className="text-4xl font-bold tracking-tight text-white transition-colors group-hover:text-white">
            TrueNorth
          </h2>

          <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#D8B25C]">
            Building Science
          </p>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-[15px] font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#D8B25C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button className="rounded-full bg-linear-to-b from-[#D4A63A] to-[#B88923] px-8 py-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
            Book an Inspection
          </Button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#102A43]/98 px-8 py-6">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-white/90 transition hover:text-[#D8B25C]"
              >
                {link.name}
              </a>
            ))}

            <Button className="mt-4 rounded-full bg-[#B88923] py-6 text-white">
              Book an Inspection
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}