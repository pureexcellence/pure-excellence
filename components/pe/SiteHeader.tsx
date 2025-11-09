// components/pe/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Diensten", href: "/diensten" },
  { label: "Quick Scan", href: "/scan" },
  { label: "Over", href: "/over" },
  { label: "Contact", href: "/contact" },
  // statisch bestand in /public/tools/action-tracker/index.html
{ label: "Action Tracker", href: "/tools/action-tracker/index.html", external: true },
];

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // sluit mobiele navigatie bij routewijziging
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("http")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2"
            aria-label="Ga naar de startpagina"
          >
            {/* Monogram */}
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-sm font-bold leading-none text-white md:h-9 md:w-9">
              PE
            </span>
            <span className="text-base font-semibold tracking-tight text-gray-900 md:text-lg">
              Pure <span className="text-blue-700">Excellence</span>
            </span>
          </Link>
        </div>

        {/* Desktop navigatie */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className={cx(
                  "text-sm font-medium text-gray-700 transition-colors hover:text-blue-700",
                  isActive(item.href) && "text-blue-700"
                )}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cx(
                  "text-sm font-medium text-gray-700 transition-colors hover:text-blue-700",
                  isActive(item.href) && "text-blue-700"
                )}
              >
                {item.label}
              </Link>
            )
          )}

          {/* CTA */}
          <Link
            href="/scan"
            className="rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Plan Quick Scan
          </Link>
        </nav>

        {/* Mobiele toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
          aria-controls="mobile-nav"
          aria-expanded={open}
        >
          <span className="sr-only">Open hoofdmenu</span>
          {/* hamburger / close */}
          <svg
            className={cx("h-6 w-6", open && "hidden")}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={cx("h-6 w-6", !open && "hidden")}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobiele navigatie */}
      <div
        id="mobile-nav"
        className={cx("border-t bg-white md:hidden", open ? "block" : "hidden")}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 md:px-6">
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className={cx(
                  "rounded-md px-2 py-2 text-sm font-medium",
                  isActive(item.href) ? "text-blue-700" : "text-gray-800",
                  "hover:bg-gray-50"
                )}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cx(
                  "rounded-md px-2 py-2 text-sm font-medium",
                  isActive(item.href) ? "text-blue-700" : "text-gray-800",
                  "hover:bg-gray-50"
                )}
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            href="/scan"
            className="mt-2 rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Plan Quick Scan
          </Link>
        </nav>
      </div>
    </header>
  );
}