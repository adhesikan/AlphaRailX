import { Metadata } from "next";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Approach",
  description: "Delivery methodology and governance for production AI systems."
};

export default function ApproachPage() {
  return (
    <div>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold">Production-first methodology</h1>
            <p className="mt-4 text-muted-foreground">
              We build AI systems that are safe, auditable, and operationally resilient from day one.
              Our approach separates execution concerns, embeds policy checks, and ensures governance
              evidence is always available.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Guiding principles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Production-first architecture</p>
              <p>Safety by design</p>
              <p>Policy-controlled execution</p>
              <p>Separation of concerns: UI, API, runtime</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Execution architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <svg viewBox="0 0 420 220" className="w-full" role="img" aria-label="Execution architecture diagram">
                <rect x="20" y="20" width="120" height="60" rx="12" fill="#E2E8F0" />
                <rect x="160" y="20" width="120" height="60" rx="12" fill="#CBD5F5" />
                <rect x="300" y="20" width="100" height="60" rx="12" fill="#E2E8F0" />
                <rect x="20" y="120" width="180" height="70" rx="12" fill="#1E293B" />
                <rect x="220" y="120" width="180" height="70" rx="12" fill="#0F172A" />
                <text x="45" y="55" fontSize="12" fill="#475569">User UI</text>
                <text x="180" y="55" fontSize="12" fill="#475569">API Gateway</text>
                <text x="325" y="55" fontSize="12" fill="#475569">Policy</text>
                <text x="60" y="160" fontSize="12" fill="#F8FAFC">Execution Runtime</text>
                <text x="250" y="160" fontSize="12" fill="#F8FAFC">Audit & Observability</text>
                <path d="M80 80V120" stroke="#94A3B8" strokeWidth="2" />
                <path d="M220 80V120" stroke="#94A3B8" strokeWidth="2" />
                <path d="M350 80V120" stroke="#94A3B8" strokeWidth="2" />
              </svg>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Governance controls</CardTitle>
            </CardHeader>
            <CardContent>
              <svg viewBox="0 0 420 220" className="w-full" role="img" aria-label="Governance controls diagram">
                <rect x="30" y="30" width="160" height="60" rx="12" fill="#E2E8F0" />
                <rect x="230" y="30" width="160" height="60" rx="12" fill="#E2E8F0" />
                <rect x="30" y="130" width="360" height="70" rx="12" fill="#1E293B" />
                <text x="60" y="65" fontSize="12" fill="#475569">Approval Gate</text>
                <text x="260" y="65" fontSize="12" fill="#475569">Policy Checks</text>
                <text x="60" y="170" fontSize="12" fill="#F8FAFC">Audit Trails & Evidence Export</text>
                <path d="M110 90V130" stroke="#94A3B8" strokeWidth="2" />
                <path d="M310 90V130" stroke="#94A3B8" strokeWidth="2" />
              </svg>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold">Delivery methodology</h2>
            <p className="mt-4 text-muted-foreground">
              A structured path that aligns stakeholders, validates risk controls, and supports
              regulatory expectations.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                title: "Discover",
                copy: "Map workflows, identify data dependencies, and align on business outcomes."
              },
              {
                title: "Design",
                copy: "Define system architecture, policy controls, and operational playbooks."
              },
              {
                title: "Build",
                copy: "Implement AI workflows, integrations, and secure execution environments."
              },
              {
                title: "Govern",
                copy: "Validate controls, evidence logging, and compliance readiness."
              },
              {
                title: "Operate",
                copy: "Monitor, evaluate, and optimize AI performance over time."
              }
            ].map((item) => (
              <AccordionItem key={item.title} value={item.title}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.copy}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </div>
  );
}
