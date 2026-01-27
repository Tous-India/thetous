import { Geist, Geist_Mono } from "next/font/google";
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

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-poppins', });


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | The Tous",
  },
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
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=SUSE+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${lato.variable} ${poppins.variable}`}
      >
        <QueryProvider>
          <LenisProvider>
            <Header />
            {children}
            <MousePointer />
            <Footer />
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

        {/* <!-- Google Tag Manager --> */}
        {/* <script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NVVQMS4Z');</script> */}
        {/* <!-- End Google Tag Manager --> */}



      </body>
    </html>
  );
}
