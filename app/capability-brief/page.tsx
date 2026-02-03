import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Capability Brief",
  description: "Download the AlphaRailX capability brief."
};

export default function CapabilityBriefPage() {
  return (
    <div>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold">Capability brief</h1>
            <p className="mt-4 text-muted-foreground">
              A concise overview of AlphaRailX implementation, governance, and AI Ops services.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="/capability-brief.pdf" download>
                  Download PDF
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Talk to an Architect</Link>
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What’s inside</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Service overview, delivery timelines, governance controls, and security posture tailored
              for regulated financial institutions.
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
