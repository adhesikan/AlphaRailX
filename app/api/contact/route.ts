import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  role: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  interest: z.string().min(2),
  timeline: z.string().min(2)
});

const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;
const rateLimitMap = new Map<string, { count: number; start: number }>();

function getClientId(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(clientId: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(clientId);

  if (!entry) {
    rateLimitMap.set(clientId, { count: 1, start: now });
    return false;
  }

  if (now - entry.start > rateLimitWindowMs) {
    rateLimitMap.set(clientId, { count: 1, start: now });
    return false;
  }

  if (entry.count >= rateLimitMax) {
    return true;
  }

  entry.count += 1;
  rateLimitMap.set(clientId, entry);
  return false;
}

export async function POST(request: Request) {
  const clientId = getClientId(request);
  if (isRateLimited(clientId)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form submission. Please check the fields." },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
