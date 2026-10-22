import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeaime Powell — Systems Analyst & Community Building Specialist",
  description:
    "Portfolio of Jeaime Powell — IT professional specializing in High-Performance Computing, IoT sensors, Agentic AI, and STEM education. Based in Orlando, FL.",
  keywords: [
    "Jeaime Powell",
    "Systems Analyst",
    "HPC",
    "High Performance Computing",
    "IoT",
    "Agentic AI",
    "Cybersecurity",
    "STEM Education",
    "TACC",
    "Texas Advanced Computing Center",
  ],
  authors: [{ name: "Jeaime Powell" }],
  icons: {
    icon: `${process.env.NEXT_BASE_PATH ?? ""}/jeaime-powell.jpg`,
  },
  openGraph: {
    title: "Jeaime Powell — Systems Analyst & Community Building Specialist",
    description:
      "IT professional specializing in HPC, IoT, Agentic AI, and STEM education. 20+ years across supercomputing, sensors, and academia.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeaime Powell — Systems Analyst & Community Building Specialist",
    description:
      "IT professional specializing in HPC, IoT, Agentic AI, and STEM education.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
