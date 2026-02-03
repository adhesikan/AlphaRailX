import { Metadata } from "next";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Anonymized case studies for production AI in financial services."
};

const caseStudies = [
  {
    title: "Operations Copilot for Client Onboarding",
    outcome: "Reduced onboarding turnaround time by 32% while improving consistency.",
    detail:
      "AlphaRailX deployed a governed copilot that summarized documentation, flagged missing data, and routed approvals through compliance gates with full audit trails."
  },
  {
    title: "Governed Agent for Compliance Evidence Collection",
    outcome: "Cut manual evidence preparation effort by 45% and improved audit readiness.",
    detail:
      "We implemented a policy-controlled agent that gathered evidence from internal systems, enforced access controls, and exported standardized audit packages."
  },
  {
    title: "Support Automation with Human-in-the-Loop",
    outcome: "Improved response times by 38% with controlled escalation pathways.",
    detail:
      "AlphaRailX designed an AI support workflow that automated routine inquiries while requiring approvals for sensitive or regulated topics."
  }
];

export default function CaseStudiesPage() {
  return (
    <div>
      <Section>
        <div>
          <h1 className="text-4xl font-semibold">Case studies</h1>
          <p className="mt-4 text-muted-foreground">
            Anonymized engagements demonstrating governed AI execution and operational outcomes.
          </p>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.title}>
              <CardHeader>
                <CardTitle className="text-base">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className="font-medium text-slate-900">{study.outcome}</p>
                <p>{study.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
