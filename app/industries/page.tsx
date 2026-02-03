import { Metadata } from "next";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Industries",
  description: "AI execution infrastructure for banks, broker-dealers, RIAs, asset managers, and fintechs."
};

const industries = [
  {
    name: "Banks",
    useCases: "Client onboarding, KYC support, internal knowledge copilots.",
    constraints: "GLBA, PII, audit trails, strict change management.",
    value: "Policy-controlled workflows with audit-ready evidence."
  },
  {
    name: "Broker-dealers",
    useCases: "Trade support automation, compliance evidence collection, surveillance triage.",
    constraints: "FINRA supervision, retention requirements, approval workflows.",
    value: "Human-in-the-loop approvals and escalation pathways."
  },
  {
    name: "RIAs",
    useCases: "Client reporting automation, advisory ops support, research summarization.",
    constraints: "SEC guidelines, recordkeeping, privacy safeguards.",
    value: "Secure retrieval and operational controls."
  },
  {
    name: "Asset Managers",
    useCases: "Operations automation, portfolio operations support, reporting workflows.",
    constraints: "SOC2, data retention, internal risk governance.",
    value: "Cost controls and model policy enforcement."
  },
  {
    name: "Fintech",
    useCases: "Customer support automation, fraud ops support, product copilots.",
    constraints: "Rapid scaling, security reviews, data residency.",
    value: "Production-grade AI Ops and monitoring."
  }
];

export default function IndustriesPage() {
  return (
    <div>
      <Section>
        <div>
          <h1 className="text-4xl font-semibold">Industries we serve</h1>
          <p className="mt-4 text-muted-foreground">
            AlphaRailX supports regulated financial organizations with AI execution infrastructure that
            aligns to their governance and compliance requirements.
          </p>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <Card key={industry.name}>
              <CardHeader>
                <CardTitle>{industry.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-slate-900">Common use cases:</span> {industry.useCases}
                </p>
                <p>
                  <span className="font-medium text-slate-900">Typical constraints:</span> {industry.constraints}
                </p>
                <p>
                  <span className="font-medium text-slate-900">What AlphaRailX provides:</span> {industry.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
