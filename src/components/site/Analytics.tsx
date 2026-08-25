import Script from "next/script";

/**
 * Tags de mídia paga: Meta Pixel e Google tag (gtag.js).
 *
 * Os IDs vêm de env vars públicas — sem elas nada é injetado, então o site
 * roda igual em desenvolvimento e em preview sem sujar os dados das contas:
 *   NEXT_PUBLIC_META_PIXEL_ID   ex.: 1234567890123456
 *   NEXT_PUBLIC_GOOGLE_TAG_ID   ex.: AW-123456789 (ou G-XXXXXXX do GA4)
 *
 * Os disparos de evento ficam em src/lib/track.ts, chamados pelos botões de
 * contato. Aqui só entra a base das duas tags.
 */
export function Analytics() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

  return (
    <>
      {pixelId ? (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');fbq('track','PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}

      {googleTagId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
            strategy="afterInteractive"
          />
          <Script id="google-tag" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${googleTagId}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}
