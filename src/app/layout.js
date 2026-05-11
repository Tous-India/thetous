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


export const metadata = {
  title: {
    template: "%s | The Tous",
  },
  icons: {
    icon: "/tousfavicon.webp",      // main favicon
    shortcut: "/favicon.ico",  // fallback
    apple: "/apple-touch-icon.png", // optional
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <Script
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
        </Script>
       
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

        
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVVQMS4Z"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

 


      </body>
    </html>
  );
}
