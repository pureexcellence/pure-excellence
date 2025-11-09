"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/scan", label: "Quick Scan" },
  { href: "/over", label: "Over" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-pe-ink">
          <span className="rounded bg-pe-primary px-2 py-1 text-white">PE</span>{" "}
          <span className="hidden sm:inline">Pure Excellence</span>
        </Link>
        <nav className="flex gap-4 text-sm">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded px-2 py-1 ${active ? "bg-pe-primary/10 text-pe-primary" : "text-slate-600 hover:text-pe-primary"}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}