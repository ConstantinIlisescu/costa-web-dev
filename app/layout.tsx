import type { Metadata } from "next";
import { Mulish, Quattrocento_Sans } from "next/font/google";
import "./globals.css";

const quattrocentoSans = Quattrocento_Sans({
  variable: "--font-title-quattrocento-sans",
  weight: "400",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CostaWebDev",
  description:
    "Web developer passionate about empowering small businesses thrive in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quattrocentoSans.variable} ${mulish.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
