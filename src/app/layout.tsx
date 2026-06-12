import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Generate CRM — Close More Deals. Automate Your Growth.",
  description:
    "Generate CRM is the all-in-one revenue system for coaches, consultants, course creators, and local businesses. Capture leads, automate follow-up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AnnouncementBar />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
