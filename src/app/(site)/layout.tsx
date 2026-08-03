import Script from "next/script";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* styles.css e assets vêm de /public */}
      <link rel="stylesheet" href="/styles.css" />
      <Header />
      {children}
      <Footer />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
