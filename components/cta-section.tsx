import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel = "Talk to an Architect",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/capability-brief"
}: CTASectionProps) {
  return (
    <Section className="bg-slate-950 text-white">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button asChild>
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          {secondaryLabel ? (
            <Button variant="outline" asChild>
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
