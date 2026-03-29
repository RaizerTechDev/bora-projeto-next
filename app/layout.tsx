import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "bora - Tecnologia para impulsionar a mudança",

  description:
    "Ajudamos empresas a utilizar a tecnologia do jeito certo para acelerar mudanças, reduzir custos e tornar o dia a dia mais eficiente.",
  generator: "v0.app",

  icons: {
    icon: [
      {
        url: "/logo-bora.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-bora.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
