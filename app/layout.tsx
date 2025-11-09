// app/(pe)/layout.tsx  of  app/layout.tsx  (waar jouw layout staat)
import "./globals.css";

import type { Metadata } from "next";
import SiteHeader from "@/components/pe/SiteHeader";
import SiteFooter from "@/components/pe/SiteFooter";

export const metadata: Metadata = {
  title: "Pure Excellence",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
