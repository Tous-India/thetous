import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Tous - Best Digital Marketing Agency",
  description: "Best Digital Marketing Agency",
  icons: {
    icon: "/tousfavicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=SUSE+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
      </body>
    </html>
  );
}
