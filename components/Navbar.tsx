"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Building2,
  ChevronDown,
  Gauge,
  House,
  Menu,
  X,
} from "lucide-react";

import { siteConfig } from "@/lib/site";

const serviceGroups = [
  {
    icon: Building2,
    label: "Building Envelope Consulting",
    description:
      "Independent engineering consulting for new construction, rehabilitation projects, and existing buildings.",
    href: "/engineering-services",
    services: [
      "Building Envelope Consulting",
      "Building Condition Assessments",
      "Building Envelope Quality Assurance",
    ],
    comingSoon: false,
  },
  {
    icon: Gauge,
    label: "Building Performance Testing",
    description:
      "Field testing capabilities for windows, curtain walls, window walls, and related building envelope assemblies.",
    href: "/testing-services",
    services: [
      "Air Leakage Testing",
      "Water Penetration Testing",
      "Curtain Wall Testing",
      "Window Wall Testing",
    ],
    comingSoon: true,
  },
];

const mainLinks = [
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const handleLogoClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    closeMenus();

    // Performs a full homepage reload so the page returns to the hero
    // and the homepage entrance animations restart.
    window.location.assign("/");
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const homeInspectionsActive =
    pathname === "/home-inspections" ||
    pathname.startsWith("/home-inspections/") ||
    pathname === "/book-inspection";

  const servicesActive =
    pathname.startsWith("/engineering-services") ||
    pathname.startsWith("/testing-services");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled
          ? "border-white/10 bg-[#102A43]/95 shadow-[0_12px_35px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "border-transparent bg-[#102A43]"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label={`${siteConfig.company.shortName} homepage`}
          className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#102A43]"
        >
          <Image
            src="/logo/logo-gold.svg"
            alt="Velora Engineering and Consulting"
            width={320}
            height={70}
            priority
            className="h-12 w-auto lg:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-9 lg:flex"
        >
          {/* Primary Home Inspection Link */}
          <Link
            href="/home-inspections"
            onClick={closeMenus}
            className={`text-sm font-semibold transition-colors ${
              homeInspectionsActive
                ? "text-[#D4A63A]"
                : "text-white hover:text-[#D4A63A]"
            }`}
          >
            Home Inspections
          </Link>

          {/* Engineering Services Dropdown */}
          <div
            ref={servicesMenuRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() =>
                setServicesOpen((current) => !current)
              }
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                servicesActive
                  ? "text-[#D4A63A]"
                  : "text-white hover:text-[#D4A63A]"
              }`}
            >
              Services

              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                id="services-menu"
                className="absolute left-1/2 top-full w-[540px] -translate-x-1/2 pt-5"
              >
                <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-[#102A43] shadow-2xl shadow-black/30">
                  {serviceGroups.map((group, index) => {
                    const Icon = group.icon;

                    const active =
                      pathname === group.href ||
                      pathname.startsWith(`${group.href}/`);

                    return (
                      <Link
                        key={group.label}
                        href={group.href}
                        onClick={closeMenus}
                        className={`group p-7 transition duration-300 hover:bg-white/[0.06] ${
                          index > 0
                            ? "border-l border-white/10"
                            : ""
                        } ${
                          active ? "bg-white/[0.06]" : ""
                        }`}
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A] transition duration-300 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                          <Icon
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </div>

                        <div className="mt-5 flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-white">
                              {group.label}
                            </p>

                            {group.comingSoon && (
                              <span className="mt-2 inline-flex rounded-full border border-[#D4A63A]/30 bg-[#D4A63A]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D4A63A]">
                                Coming Soon
                              </span>
                            )}
                          </div>

                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-[#D4A63A] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {group.description}
                        </p>

                        <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                          {group.services.map((service) => (
                            <li
                              key={service}
                              className="text-xs leading-5 text-slate-400"
                            >
                              {service}
                            </li>
                          ))}
                        </ul>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Resources + About */}
          {mainLinks.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className={`text-sm font-semibold transition-colors ${
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

        {/* Desktop Booking CTA */}
        <div className="hidden lg:block">
          <Link
            href="/book-inspection"
            onClick={closeMenus}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D4A63A] px-8 text-sm font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
          >
            Book Inspection
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() =>
            setMobileOpen((current) => !current)
          }
          className="rounded-xl p-2 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] lg:hidden"
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-7 w-7" />
          ) : (
            <Menu aria-hidden="true" className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100dvh-88px)] overflow-y-auto border-t border-white/10 bg-[#102A43] lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="px-6 py-7"
          >
            {/* Home Inspections */}
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4A63A]">
              Home Inspections
            </p>

            <Link
              href="/home-inspections"
              onClick={closeMenus}
              className={`mt-5 flex items-center gap-4 rounded-2xl border p-4 transition ${
                homeInspectionsActive
                  ? "border-[#D4A63A]/50 bg-white/10"
                  : "border-white/10 hover:bg-white/[0.06]"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A]">
                <House
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </span>

              <span>
                <span className="font-semibold text-white">
                  Home Inspections
                </span>

                <span className="mt-1 block text-xs leading-5 text-slate-400">
                  P.Eng.-led residential inspections backed by
                  building science and construction experience.
                </span>
              </span>
            </Link>

            {/* Engineering Services */}
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4A63A]">
              Engineering Services
            </p>

            <div className="mt-5 space-y-3">
              {serviceGroups.map((group) => {
                const Icon = group.icon;

                const active =
                  pathname === group.href ||
                  pathname.startsWith(`${group.href}/`);

                return (
                  <Link
                    key={group.label}
                    href={group.href}
                    onClick={closeMenus}
                    className={`flex items-center gap-4 rounded-2xl border p-4 transition ${
                      active
                        ? "border-[#D4A63A]/50 bg-white/10"
                        : "border-white/10 hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A]">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </span>

                    <span>
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-white">
                          {group.label}
                        </span>

                        {group.comingSoon && (
                          <span className="rounded-full border border-[#D4A63A]/30 bg-[#D4A63A]/10 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#D4A63A]">
                            Coming Soon
                          </span>
                        )}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-slate-400">
                        {group.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Resources + About */}
            <div className="mt-7 border-t border-white/10 pt-5">
              {mainLinks.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className={`block rounded-xl px-4 py-3 font-medium transition ${
                      active
                        ? "bg-white/10 text-[#D4A63A]"
                        : "text-white hover:bg-white/10 hover:text-[#D4A63A]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Booking CTA */}
            <Link
              href="/book-inspection"
              onClick={closeMenus}
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition hover:bg-[#E0B552]"
            >
              Book a Home Inspection
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}