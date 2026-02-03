import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AlphaRailX to discuss AI execution infrastructure."
};

export default function ContactPage() {
  return (
    <div>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold">Let’s plan your AI production roadmap</h1>
            <p className="mt-4 text-muted-foreground">
              Talk with our architects about governance-first AI implementations for financial
              institutions.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="#form">Schedule a call</Link>
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Meeting expectations</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We respond within one business day. We can provide a tailored proposal, architecture
              review, or AI governance assessment.
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="form" className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <ContactForm />
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Compliance note</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                AlphaRailX provides technology services only. We do not offer investment advice or
                broker-dealer services.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Immediate options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Request a capability brief.</p>
                <Button variant="outline" asChild>
                  <Link href="/capability-brief">Download capability brief</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
