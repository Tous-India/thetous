import "bootstrap/dist/css/bootstrap.min.css";
import Script from 'next/script'
import "@/app/globals.css";
import "@/app/responsive.css";
import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import "remixicon/fonts/remixicon.css";
import MousePointer from "@/components/MousePointer";
import LenisProvider from "@/components/LenisProvider";
import FooterAnimaton from "@/components/FooterAnimaton";
import QueryProvider from "@/components/QueryProvider";


import { Lato, Poppins } from 'next/font/google';

const lato = Lato({ weight: ['100', '300', '400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-lato', });

const poppins = Poppins({ weight: ['200', '300', '400', '500', '600', '700', '800'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-poppins', });


// Revalidate the prerendered HTML daily so the booking banner's
// dynamically computed next-month label never goes stale.
export const revalidate = 86400; // 24 hours in seconds

export const metadata = {
  title: {
    template: "%s | The Tous",
  },
  icons: {
    icon: "/tousfavicon.webp",      // main favicon
    shortcut: "/favicon.ico",  // fallback
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Removed in favor of direct Meta Pixel — May 2026 */}
        {/* <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NVVQMS4Z');
          `}
        </Script> */}

        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              id="ga4-loader"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}

      </head>
      <body
        className={`antialiased ${lato.variable} ${poppins.variable}`}
      >
        <QueryProvider>
          <LenisProvider>
            <Footer />
            <div className="page-content-wrapper">
              <Header />
              {children}
              <MousePointer />
            </div>
            <BootstrapClient />
          </LenisProvider>
        </QueryProvider>

        
        {/* Removed in favor of direct Meta Pixel — May 2026 */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVVQMS4Z"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript> */}

        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

 


      </body>
    </html>
  );
}
