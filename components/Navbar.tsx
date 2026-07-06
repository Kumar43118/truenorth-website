import { Button } from "./ui/button";

const links = [
  "Home Inspections",
  "Engineering Services",
  "Resources",
  "About",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#102A43]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-8 lg:px-12">

        {/* Logo */}
        <div className="cursor-pointer">
          <h1 className="text-[2rem] font-bold leading-none tracking-tight text-white transition duration-300 hover:text-white/95">
            TrueNorth
          </h1>

          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.34em] text-[#D8B25C]">
            BUILDING SCIENCE
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {links.map((link, index) => (
            <a
              key={link}
              href="#"
              className="group relative text-[15px] font-medium text-white/90 transition-colors duration-300 hover:text-white"
            >
              {link}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-[#D8B25C] transition-all duration-300 ${
                  index === 0
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button className="rounded-full bg-gradient-to-r from-[#C99A2E] to-[#B58420] px-8 py-6 text-sm font-semibold text-white shadow-lg shadow-[#000]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#000]/30">
          Book Inspection
        </Button>

      </div>
    </header>
  );
}