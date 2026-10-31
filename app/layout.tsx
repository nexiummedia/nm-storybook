import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nexium Media Docs",
    default: "Nexium Media Documentation",
  },
  description:
    "Official developer and company documentation for Nexium Media — website development, performance marketing, SEO, and digital growth platform.",
  metadataBase: new URL("https://docs.nexiummedia.com"),
  openGraph: {
    title: "Nexium Media Documentation",
    description:
      "Modern documentation portal for Nexium Media engineering, digital marketing, website development, and client delivery standards.",
    siteName: "Nexium Media Docs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
