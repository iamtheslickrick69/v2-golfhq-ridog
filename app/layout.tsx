import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "GolfHQ - AI-Powered Golf Digital Country Club",
  description: "The #1 golf marketplace with Riley B as your AI caddy. Track rounds, review courses, compete in leagues, and improve your game.",
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
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
