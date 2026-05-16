import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/case-studies/crossroads-hospital",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/case-studies/godrej",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/case-studies/m3m-panipat",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/case-studies/sbp",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/case-studies/ska-orion",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/case-studies/tarc",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "/book-a-call",
        permanent: true,
      },
      {
        source: "/get-your-custom-quote",
        destination: "/book-a-call",
        permanent: true,
      },
      {
        source: "/case-studies/oh-my-pet-grooming",
        destination: "/case-studies/omp-grooming",
        permanent: true,
      },
      {
        source: "/hiring",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/hiring/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/transforming-brands-online",
        destination: "/",
        permanent: true,
      },
      {
        source: "/transforming-brands-online/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/marketing-solution",
        destination: "/tech-solution",
        permanent: true,
      },
      {
        source: "/marketing-solution/",
        destination: "/tech-solution",
        permanent: true,
      },
      {
        source: "/category/paid-ads",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/paid-ads/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/the-secret-sauce-to-scale-your-ecommerce-business-with-paid-ads",
        destination: "/",
        permanent: true,
      },
      {
        source: "/the-secret-sauce-to-scale-your-ecommerce-business-with-paid-ads/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elementor-hf/footer",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elementor-hf/footer/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elementor-hf/header",
        destination: "/",
        permanent: true,
      },
      {
        source: "/elementor-hf/header/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog-details/transforming-brands-online",
        destination: "/",
        permanent: true,
      },
      {
        source: "/case-studies/the-pet-center",
        destination: "/case-studies/omp-grooming",
        permanent: true,
      },
      {
        source: "/case-studies/the-pet-center/",
        destination: "/case-studies/omp-grooming",
        permanent: true,
      },
      {
        source: "/media-solution",
        destination: "/tech-solution",
        permanent: true,
      },
      {
        source: "/media-solution/",
        destination: "/tech-solution",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "thetous.com", pathname: "/wp-content/uploads/**" },
      { protocol: "https", hostname: "blog.thetous.com", pathname: "/wp-content/uploads/**" },
      { protocol: "https", hostname: "cdn.prod.website-files.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;