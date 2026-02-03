"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const interests = [
  "AI implementation",
  "Governance & controls",
  "Managed AI Ops",
  "Security review",
  "Other"
];

const timelines = ["Immediate", "1-3 months", "3-6 months", "6+ months"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setStatus("success");
      setMessage("Thanks for reaching out. Our team will respond within one business day.");
      event.currentTarget.reset();
    } else {
      setStatus("error");
      const data = await response.json().catch(() => null);
      setMessage(data?.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact AlphaRailX</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <Input id="name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="company">
                Company
              </label>
              <Input id="company" name="company" required placeholder="Institution name" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="role">
                Role
              </label>
              <Input id="role" name="role" required placeholder="CIO, Head of Ops" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Work email
              </label>
              <Input id="email" name="email" type="email" required placeholder="name@company.com" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="phone">
                Phone (optional)
              </label>
              <Input id="phone" name="phone" placeholder="+1 (___) ___-____" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Interest</label>
              <Select name="interest" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select interest" />
                </SelectTrigger>
                <SelectContent>
                  {interests.map((interest) => (
                    <SelectItem key={interest} value={interest}>
                      {interest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Timeline</label>
              <Select name="timeline" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelines.map((timeline) => (
                    <SelectItem key={timeline} value={timeline}>
                      {timeline}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="message">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Tell us about your goals and constraints."
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Please do not include confidential information in the form.
          </p>
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Submit"}
          </Button>
          {message ? (
            <p
              className={`text-sm ${status === "error" ? "text-red-600" : "text-emerald-600"}`}
            >
              {message}
            </p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
