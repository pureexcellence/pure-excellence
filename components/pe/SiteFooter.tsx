import Container from "./Container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t py-10 text-sm">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Pure Excellence
        </p>
        <div className="flex gap-4">
          <Link href="/over" className="text-slate-500 hover:text-pe-primary">Over</Link>
          <Link href="/contact" className="text-slate-500 hover:text-pe-primary">Contact</Link>
          <a href="/sitemap.xml" className="text-slate-500 hover:text-pe-primary">Sitemap</a>
        </div>
      </Container>
    </footer>
  );
}