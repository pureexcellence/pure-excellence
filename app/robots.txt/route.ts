import { NextResponse } from "next/server";
export const dynamic = "force-static";
export async function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://www.pureexcellence.be/sitemap.xml
`;
  return new NextResponse(body, { headers: { "content-type": "text/plain" } });
}