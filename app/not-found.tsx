import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="mt-4 text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you are looking for doesn’t exist. Return to the homepage or contact our team.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Talk to an Architect</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
