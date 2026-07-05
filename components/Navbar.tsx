import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xl font-bold tracking-tight text-[#102A43]">
            TrueNorth
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#B88A2A]">
            Building Science
          </p>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          <a className="transition hover:text-[#102A43]" href="#">
            Residential Inspections
          </a>
          <a className="transition hover:text-[#102A43]" href="#">
            Building Science
          </a>
          <a className="transition hover:text-[#102A43]" href="#">
            Resources
          </a>
          <a className="transition hover:text-[#102A43]" href="#">
            About
          </a>
          <a className="transition hover:text-[#102A43]" href="#">
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