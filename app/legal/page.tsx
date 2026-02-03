import { Metadata } from "next";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Legal",
  description: "Terms, privacy, and disclaimers for AlphaRailX."
};

export default function LegalPage() {
  return (
    <div>
      <Section>
        <div>
          <h1 className="text-4xl font-semibold">Legal</h1>
          <p className="mt-4 text-muted-foreground">
            Transparency on privacy, terms, and service disclaimers.
          </p>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy policy (placeholder)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We collect only the information needed to respond to inquiries and deliver services. We
              do not sell personal data. Full policy to be published.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Terms of service (placeholder)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Engagements are governed by signed statements of work and master services agreements.
              Full terms to be published.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                AlphaRailX provides technology implementation and operational services. We do not
                provide investment advice, brokerage services, or trade recommendations.
              </p>
              <p>
                AlphaRailX does not provide broker-dealer services, investment management, or financial
                advisory services.
              </p>
              <p>Outcomes are not guaranteed and depend on client data, governance, and adoption.</p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
