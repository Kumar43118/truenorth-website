import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#102A43]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 lg:px-12">
        <div>
          <p className="text-xl font-bold tracking-tight text-white">
            TrueNorth
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D8B25C]">
            Building Science
          </p>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 lg:flex">
          <a className="transition hover:text-[#D8B25C]" href="#">
            Residential Inspections
          </a>
          <a className="transition hover:text-[#D8B25C]" href="#">
            Building Science
          </a>
          <a className="transition hover:text-[#D8B25C]" href="#">
            Resources
          </a>
          <a className="transition hover:text-[#D8B25C]" href="#">
            About
          </a>
          <a className="transition hover:text-[#D8B25C]" href="#">
            Contact
          </a>
        </nav>

        <Button className="rounded-full bg-[#B88A2A] px-6 py-5 text-sm font-semibold text-white hover:bg-[#a07824]">
          Book Inspection
        </Button>
      </div>
    </header>
  );
}