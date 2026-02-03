import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Resources",
  description: "Capability brief, blog placeholders, and AI governance resources."
};

export default function ResourcesPage() {
  return (
    <div>
      <Section>
        <div>
          <h1 className="text-4xl font-semibold">Resources</h1>
          <p className="mt-4 text-muted-foreground">
            Download our capability brief and explore upcoming thought leadership on governed AI.
          </p>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Capability brief</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                A concise overview of AlphaRailX services, delivery methodology, and governance
                controls.
              </p>
              <Button asChild>
                <Link href="/capability-brief">Download capability brief</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI governance checklist</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Request our checklist to evaluate AI governance readiness across policy, audit, and
              operational domains.
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div>
          <h2 className="text-3xl font-semibold">Blog (coming soon)</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "From pilots to production: the AI governance gap",
                summary: "Why financial institutions need execution infrastructure for AI adoption."
              },
              {
                title: "Operational readiness for AI agents",
                summary: "Designing monitoring, escalation, and audit workflows."
              },
              {
                title: "Cost control for production AI systems",
                summary: "Budgets, rate limiting, and model routing strategies."
              }
            ].map((post) => (
              <Card key={post.title}>
                <CardHeader>
                  <CardTitle className="text-base">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{post.summary}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
