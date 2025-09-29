import type { Metadata } from "next";
import { Playwrite_US_Modern } from "next/font/google";
import "./globals.css";

const Playwrite = Playwrite_US_Modern({
  variable: "--font-playwrite",
});

export const metadata: Metadata = {
  title: "360 Agency",
  description: "Social Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Playwrite.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
