import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "GolfHQ.ai - Your AI Golf Caddy",
  description: "The operating system for golf - Riley B guides you through every aspect of your golf journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
