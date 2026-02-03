import { Metadata } from "next";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Security",
  description: "Security posture, data handling, and model policy for AlphaRailX."
};

export default function SecurityPage() {
  return (
    <div>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold">Security posture</h1>
            <p className="mt-4 text-muted-foreground">
              AlphaRailX designs AI systems with encryption, access controls, and auditability to meet
              the demands of regulated financial institutions.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Security contact</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              security@alpharailx.com · Please do not send confidential information via email.
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Data handling",
              copy: "Encryption in transit and at rest, data minimization, and configurable retention policies."
            },
            {
              title: "Deployment options",
              copy: "Cloud, VPC, and on-prem friendly implementations based on your infrastructure requirements."
            },
            {
              title: "Model policy",
              copy: "Vendor selection, evaluation, red-teaming, and ongoing monitoring to mitigate model risk."
            },
            {
              title: "Compliance stance",
              copy: "We support your compliance program; we are not a compliance authority."
            }
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{item.copy}</CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
