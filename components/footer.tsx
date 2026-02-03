import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-lg font-semibold">AlphaRailX</p>
            <p className="mt-3 text-sm text-slate-300">
              AlphaRailX provides technology implementation and operational services. We do not provide
              investment advice, brokerage services, or trade recommendations.
            </p>
            <p className="mt-4 text-sm text-slate-300">
              Shrewsbury, MA · hello@alpharailx.com
            </p>
          </div>
          <div className="grid gap-2 text-sm text-slate-300 md:justify-end">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/approach" className="hover:text-white">
              Approach
            </Link>
            <Link href="/security" className="hover:text-white">
              Security
            </Link>
            <Link href="/legal" className="hover:text-white">
              Legal
            </Link>
          </div>
        </div>
        <Separator className="my-6 bg-white/10" />
        <p className="text-xs text-slate-400">© 2024 AlphaRailX. All rights reserved.</p>
      </div>
    </footer>
  );
}
