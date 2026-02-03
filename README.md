# AlphaRailX Marketing Site

Production-ready marketing website for AlphaRailX.com built with Next.js 14, Tailwind CSS, shadcn/ui, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Environment Variables

Create a `.env.local` file with the following (optional) variables:

```bash
NEXT_PUBLIC_SITE_URL=https://alpharailx.com
NEXT_PUBLIC_GA4_ID=G-XXXXXXX
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=123456
```

Analytics scripts only load if the optional IDs are provided.

## Deployment Notes

- Designed for Vercel or Railway. Ensure `NEXT_PUBLIC_SITE_URL` matches the deployed URL for sitemap and OpenGraph metadata.
- `/api/contact` is a stub endpoint with in-memory rate limiting and server-side validation (Zod). Replace with your CRM or email provider as needed.
- Capability brief placeholder PDF is stored at `public/capability-brief.pdf`.

## Compliance

AlphaRailX provides technology implementation and operational services. We do not provide investment advice, brokerage services, or trade recommendations.
