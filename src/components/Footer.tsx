import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-header text-header-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo + socials */}
          <div>
            <a href="/" className="inline-block leading-none">
              <span className="block font-script text-3xl">Lilla</span>
              <span className="block font-display text-2xl tracking-[0.25em]">
                HOTELLET
              </span>
            </a>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-header-foreground/80 transition hover:text-header-foreground"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-header-foreground/80 transition hover:text-header-foreground"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Besök oss */}
          <div>
            <h3 className="font-display text-lg">Besök oss</h3>
            <div className="mt-3 h-px w-10 bg-header-foreground/40" />
            <address className="mt-6 space-y-4 not-italic text-sm text-header-foreground/90">
              <p>Bankgatan 7</p>
              <p>223 52 Lund</p>
            </address>
            <a
              href="#"
              className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] underline underline-offset-4"
            >
              Hitta hit
            </a>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-display text-lg">Kontakt</h3>
            <div className="mt-3 h-px w-10 bg-header-foreground/40" />
            <ul className="mt-6 space-y-4 text-sm text-header-foreground/90">
              <li>
                <a href="tel:+4646328888" className="hover:underline">
                  046 - 32 88 88
                </a>
              </li>
              <li>
                <a href="mailto:info@lillahotellet.com" className="hover:underline">
                  info@lillahotellet.com
                </a>
              </li>
            </ul>
          </div>

          {/* Boka */}
          <div>
            <h3 className="font-display text-lg">Boka</h3>
            <div className="mt-3 h-px w-10 bg-header-foreground/40" />
            <div className="mt-6 space-y-3">
              <a
                href="/boka-rum"
                className="block bg-[#f1e9e0] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#2b2725] transition hover:bg-white"
              >
                Boka rum
              </a>
              <a
                href="/boka-konferens"
                className="block bg-[#f1e9e0] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#2b2725] transition hover:bg-white"
              >
                Boka konferens
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-header-foreground/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-header-foreground/70 sm:flex-row">
            <p>© 2026 Lilla Hotellet Lund</p>
            <p>
              Digital upplevelse av{" "}
              <a href="#" className="underline underline-offset-4">
                Skalra
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
