import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Stars } from "@/components/Stars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nakanishi Takashi | Full Stack Software Engineer",
  description: "Full Stack Software Engineer specializing in modern web applications, scalable backend systems, and interactive user experiences. Expert in React, Next.js, Node.js, and Golang.",
  keywords: "Full Stack Engineer, React, Next.js, Node.js, Golang, Web Development, Software Engineer, Tokyo, Japan",
  openGraph: {
    title: "Nakanishi Takashi | Full Stack Software Engineer",
    description: "Full Stack Software Engineer building modern, scalable web applications",
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
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <div className="grid-background"></div>
          <Stars />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
