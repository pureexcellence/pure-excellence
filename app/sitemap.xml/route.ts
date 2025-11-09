import { NextResponse } from "next/server";
export const dynamic = "force-static";
export async function GET() {
  const base = "https://www.pureexcellence.be";
  const urls = ["", "/diensten", "/scan", "/over", "/contact"]
    .map((u) => `<url><loc>${base}${u}</loc></url>`)
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new NextResponse(xml, { headers: { "content-type": "application/xml" } });
}