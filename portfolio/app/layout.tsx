import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeiteDev Landing Page",
  description: "Landing page made by LeiteDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <NavBar />
        <Header/>
        {children}</body>
    </html>
  );
}
