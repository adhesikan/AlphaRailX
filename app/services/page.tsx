import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Services",
  description: "AI implementation, governance, and AI Ops services for regulated financial firms."
};

export default function ServicesPage() {
  return (
    <div>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold">Implementation + AI Ops Packages</h1>
            <p className="mt-4 text-muted-foreground">
              AlphaRailX delivers production-ready AI systems with governance, auditability, and
              operational controls.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Request a proposal</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/capability-brief">Download capability brief</Link>
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pricing philosophy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Outcome-based scopes with fixed-fee pilots for discovery and deployment. Retainers cover
              ongoing operations, governance reviews, and optimization.
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <Tabs defaultValue="implementation">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="implementation">AI Implementation</TabsTrigger>
            <TabsTrigger value="governance">Governance & Controls</TabsTrigger>
            <TabsTrigger value="aiops">Managed AI Ops</TabsTrigger>
          </TabsList>
          <TabsContent value="implementation">
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                "Internal copilots (knowledge Q&A)",
                "Workflow automation (ops, support, finance)",
                "Agent systems (multi-step tasks, tool use)",
                "Integrations (Slack, email, CRMs, data warehouses)"
              ].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <CardTitle className="text-base">{item}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Design and integrate AI workflows that fit your security and data posture.
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="governance">
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                "Policy engine (pre-run and in-run checks)",
                "RBAC/SSO readiness",
                "Audit logs + evidence exports",
                "Approval flows (human-in-the-loop)",
                "Cost guardrails (budgets, token limits, rate limits)"
              ].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <CardTitle className="text-base">{item}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Controls designed to pass internal risk and compliance reviews.
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="aiops">
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                "Monitoring, evals, quality scoring",
                "Incident response playbooks",
                "Model routing + prompt/version control",
                "Monthly governance reviews"
              ].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <CardTitle className="text-base">{item}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Ongoing operational coverage to keep AI reliable and cost-efficient.
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-4">
          {
            [
              {
                title: "Readiness & Use-Case Mapping",
                duration: "2–3 weeks",
                detail: "Governance assessment, data readiness, and ROI modeling."
              },
              {
                title: "Pilot Deployment",
                duration: "4–6 weeks",
                detail: "Controlled pilot with monitoring, approvals, and audit trails."
              },
              {
                title: "Enterprise Rollout",
                duration: "8–16 weeks",
                detail: "Scaled deployment with integrations and performance benchmarks."
              },
              {
                title: "Managed AI Ops",
                duration: "Monthly",
                detail: "Continuous evaluation, cost optimization, and compliance reporting."
              }
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p className="font-medium text-slate-900">{item.duration}</p>
                  <p className="mt-2">{item.detail}</p>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </Section>

      <CTASection
        title="Ready for a governed AI deployment?"
        description="Partner with AlphaRailX to move quickly without sacrificing control."
        secondaryLabel="Download Capability Brief"
      />
    </div>
  );
}
