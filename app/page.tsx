"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import {
  ShieldCheck,
  Settings,
  Network,
  CheckCircle2,
  LineChart,
  Lock
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 }
};

export default function HomePage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div {...fadeIn}>
            <Badge variant="secondary">AI Execution Infrastructure</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              AI Execution Infrastructure for Financial Firms
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              AlphaRailX designs, deploys, and operates production-grade AI workflows and agent systems
              for regulated financial organizations—secure, auditable, and cost-controlled.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {
                [
                  "Governed AI agents with approval gates and kill-switches",
                  "Audit trails, policy enforcement, and role-based access",
                  "Cost controls: budgets, rate limits, caching, model routing",
                  "Secure knowledge retrieval from your internal systems",
                  "Operational readiness: monitoring, alerts, incident playbooks"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))
              }
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">Talk to an Architect</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/capability-brief">Download Capability Brief</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="rounded-3xl border bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-subtle">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-300">Production AI systems</p>
                <h2 className="mt-3 text-2xl font-semibold">Governed. Auditable. Operable.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <p className="mt-3 text-sm text-slate-200">
                    Policy-controlled execution with human-in-the-loop approvals.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <LineChart className="h-6 w-6 text-primary" />
                  <p className="mt-3 text-sm text-slate-200">
                    Performance, cost, and risk metrics tied to every deployment.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <p className="mt-3 text-sm text-slate-200">
                    Secure data handling, encryption, and least-privilege access.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <Settings className="h-6 w-6 text-primary" />
                  <p className="mt-3 text-sm text-slate-200">
                    AI Ops playbooks that keep models reliable and compliant.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="pt-0">
        <motion.div {...fadeIn} className="rounded-2xl border bg-white p-6 shadow-subtle">
          <p className="text-sm font-medium text-muted-foreground">Trusted by teams across finance</p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-5">
            {[
              "/logos/logo-1.svg",
              "/logos/logo-2.svg",
              "/logos/logo-3.svg",
              "/logos/logo-4.svg",
              "/logos/logo-5.svg"
            ].map((src) => (
              <div key={src} className="flex items-center justify-center">
                <img src={src} alt="Logo placeholder" width={120} height={32} className="h-8 w-auto" />
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Pilots don’t scale without governance</h2>
            <p className="mt-4 text-muted-foreground">
              Financial institutions need more than prototypes. Without policy enforcement, audit logs,
              and operational controls, AI pilots create risks: hallucinated outputs, data leakage,
              runaway costs, and unauthorized actions. AlphaRailX delivers production-grade execution
              infrastructure that keeps AI safe, compliant, and measurable.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Hallucinations", "Data leakage", "Runaway costs", "Unauthorized actions"].map((risk) => (
              <Card key={risk}>
                <CardHeader>
                  <CardTitle className="text-base">{risk}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  We design guardrails that prevent failure modes and make AI outcomes auditable.
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section className="bg-slate-50">
        <motion.div {...fadeIn} className="space-y-10">
          <div>
            <h2 className="text-3xl font-semibold">What we deliver</h2>
            <p className="mt-4 text-muted-foreground">
              AlphaRailX pairs implementation expertise with governance and AI Ops to bring AI into
              production responsibly.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Implementation",
                description: "Build and integrate AI systems that fit your workflows and infrastructure.",
                icon: Network
              },
              {
                title: "Governance",
                description: "Policy enforcement, approvals, audit logs, and controls from day one.",
                icon: ShieldCheck
              },
              {
                title: "AI Ops",
                description: "Monitoring, evaluation, and cost optimization for ongoing operations.",
                icon: Settings
              }
            ].map(({ title, description, icon: Icon }) => (
              <Card key={title}>
                <CardHeader>
                  <Icon className="h-6 w-6 text-primary" />
                  <CardTitle className="mt-4">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{description}</CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Implementation pathways</h2>
              <p className="mt-3 text-muted-foreground">
                Structured delivery scopes designed for regulated environments.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/services">Explore services</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Readiness & Use-Case Mapping",
                detail: "2–3 weeks",
                copy: "Assess data readiness, governance posture, and prioritize high-value workflows."
              },
              {
                title: "Pilot Deployment",
                detail: "4–6 weeks",
                copy: "Launch a controlled pilot with approval gates, audit trails, and monitoring."
              },
              {
                title: "Enterprise Rollout",
                detail: "8–16 weeks",
                copy: "Scale across business units with hardened security and integration."
              },
              {
                title: "Managed AI Ops",
                detail: "Monthly",
                copy: "Operational coverage, evaluation, and continuous improvement."
              }
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p className="font-medium text-slate-900">{item.detail}</p>
                  <p>{item.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section className="bg-slate-50">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-semibold">How we work</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              "Discover",
              "Design",
              "Build",
              "Govern",
              "Operate"
            ].map((step, index) => (
              <Card key={step} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-sm uppercase text-muted-foreground">Step {index + 1}</CardTitle>
                  <CardTitle className="text-lg">{step}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Clear milestones, documentation, and audit-ready evidence at every stage.
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div {...fadeIn}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Case studies</h2>
              <p className="mt-3 text-muted-foreground">
                Realistic outcomes with governance-first execution.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/case-studies">View all</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Operations Copilot for Client Onboarding",
                copy: "Reduced onboarding turnaround time by 32% while enforcing approval gates and audit logs."
              },
              {
                title: "Governed Agent for Compliance Evidence Collection",
                copy: "Cut manual evidence prep hours by 45% with policy-controlled automation."
              },
              {
                title: "Support Automation with Human-in-the-Loop",
                copy: "Improved response times by 38% with controlled escalation pathways."
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
        </motion.div>
      </Section>

      <Section className="bg-slate-50">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Security & compliance built in</h2>
            <p className="mt-3 text-muted-foreground">
              Security, privacy, and governance are designed into every workflow to meet the demands of
              regulated environments.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "No training on your data by default",
              "Data minimization and retention controls",
              "RBAC, audit logs, encrypted transit/at rest",
              "Vendor/model policy and evaluation"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border bg-white p-4">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      <CTASection
        title="Move from experimentation to production."
        description="Build AI systems your risk, compliance, and operations teams can trust."
        secondaryLabel="Download Capability Brief"
      />
    </div>
  );
}
