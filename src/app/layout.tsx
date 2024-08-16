import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Header from "@/components/Navigation/Header";
 
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "File Converter",
  description: `A versatile file converter that supports converting images, videos, and audio files to various formats. Easy to use, fast, and reliable for all your media conversion needs.`,
  keywords: "image converter, video converter, audio converter, file conversion, media converter, format converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          ibmPlexMono.variable,
          "bg-gradient-to-b from-blue-900 via-teal-800 to-green-700 h-screen overflow-x-hidden"
        )}
      >
        <Header />
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  );
}

