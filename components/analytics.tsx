import Script from "next/script";

export function Analytics() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const linkedinPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <>
      {ga4Id ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());

gtag('config', '${ga4Id}');`}
          </Script>
        </>
      ) : null}
      {linkedinPartnerId ? (
        <Script id="linkedin" strategy="afterInteractive">
          {`_linkedin_partner_id = "${linkedinPartnerId}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </Script>
      ) : null}
    </>
  );
}
