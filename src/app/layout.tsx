import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicat24hs.com.br"),
  title: "Clinicat — Hospital Veterinário 24h",
  description: "Clinicat Centro Veterinário 24h em Perdizes, São Paulo.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
