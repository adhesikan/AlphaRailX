import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alpharailx.com";

export const metadata: Metadata = {
  title: {
    default: "AlphaRailX | AI Execution Infrastructure for Financial Firms",
    template: "%s | AlphaRailX"
  },
  description:
    "AlphaRailX designs, deploys, and operates production-grade AI workflows and agent systems for regulated financial organizations—secure, auditable, and cost-controlled.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "AlphaRailX | AI Execution Infrastructure for Financial Firms",
    description:
      "Production AI systems with governance, auditability, and AI Ops for regulated financial institutions.",
    url: siteUrl,
    siteName: "AlphaRailX",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AlphaRailX",
  url: siteUrl,
  sameAs: [],
  description:
    "AI execution infrastructure, implementation, and AI operations for regulated financial firms."
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AlphaRailX",
  url: siteUrl,
  areaServed: "Global",
  serviceType: ["AI Implementation", "AI Governance", "AI Operations"],
  description:
    "Production AI systems with governance, auditability, and operational control for financial institutions."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-background text-foreground">
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, serviceJsonLd])
          }}
        />
      </body>
    </html>
  );
}
