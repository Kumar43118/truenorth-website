export default function Footer() {
  return (
    <footer className="bg-[#071A2D] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-bold">TrueNorth</p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#B88A2A]">
            Building Science
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Professional home inspections and building science services
            conducted by a Licensed Professional Engineer.
          </p>
        </div>

        <div className="text-sm text-slate-300">
          <p>info@truenorthbs.com</p>
          <p className="mt-2">Serving Ottawa & Surrounding Areas</p>
          <p className="mt-6 text-xs">
            © 2026 TrueNorth Building Science. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}