import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rhythm Sharma — Visual Designer",
  description: "Visual & UI/UX Designer crafting intuitive digital experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
