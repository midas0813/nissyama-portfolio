import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Nakanishi Takashi | Senior Backend Engineer - Golang Specialist",
  description: "Senior Fullstack Engineer specializing in scalable Golang backend systems, microservices architecture, and cloud infrastructure. Based in Tokyo, Japan.",
  keywords: "Golang, Backend Engineer, Microservices, Cloud Architecture, Tokyo, Japan, Senior Engineer",
  openGraph: {
    title: "Nakanishi Takashi | Senior Backend Engineer",
    description: "Senior Fullstack Engineer specializing in scalable Golang backend systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
