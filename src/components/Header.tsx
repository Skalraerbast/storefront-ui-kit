import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Hem" },
  { to: "/boka-rum", label: "Boka rum" },
  { to: "/boka-konferens", label: "Boka konferens" },
  { to: "/galleri", label: "Galleri" },
  { to: "/nyheter", label: "Nyheter" },
  { to: "/kontakt", label: "Kontakta oss" },
] as const;

const announcements = [
  "Välkommen till lilla hotellet",
  "Boka ditt rum direkt hos oss – bästa pris garanterat",
  "Nu öppnar vi upp för konferensbokningar hösten 2026",
];

export function Header() {
  const [announceIdx, setAnnounceIdx] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const prev = () =>
    setAnnounceIdx((i) => (i - 1 + announcements.length) % announcements.length);
  const next = () => setAnnounceIdx((i) => (i + 1) % announcements.length);

  return (
    <header className="w-full">
      {/* Announcement bar */}
      <div className="bg-header text-header-foreground">
        <div className="flex items-center justify-between px-4 py-2.5 text-sm">
          <button
            onClick={prev}
            aria-label="Föregående meddelande"
            className="p-1 opacity-80 transition hover:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <p className="flex-1 text-center font-semibold tracking-wide">
            {announcements[announceIdx]}
          </p>
          <button
            onClick={next}
            aria-label="Nästa meddelande"
            className="p-1 opacity-80 transition hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-header text-header-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-6 lg:px-12">
          <Link to="/" className="shrink-0 leading-none" aria-label="Lilla Hotellet – hem">
            <span className="block font-script text-5xl leading-none text-header-foreground">
              Lilla
            </span>
            <span className="mt-1 block font-display text-[2.25rem] leading-none tracking-[0.15em] text-header-foreground">
              HOTELLET
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-lg text-header-foreground/90 transition hover:text-header-foreground"
                activeProps={{
                  className: "text-header-foreground underline underline-offset-8",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Öppna meny"
            aria-expanded={mobileOpen}
            className="lg:hidden"
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="flex flex-col gap-1 border-t border-header-foreground/15 px-6 pb-6 pt-2 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="py-3 text-lg text-header-foreground/90"
                activeProps={{
                  className: "text-header-foreground underline underline-offset-8",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Cream divider strip */}
      <div className="h-2 bg-header-accent" />
    </header>
  );
}
