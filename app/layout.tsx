import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conversa | AI Appointment Setter That Never Sleeps",
  description:
    "Conversa calls your prospects, handles objections like a human, books Strategy Sessions on your calendar — and gets better after every single call.",
  keywords: [
    "AI calling",
    "appointment setter",
    "real estate AI",
    "lead conversion",
    "AI voice agent",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
