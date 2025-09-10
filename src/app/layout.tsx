import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Find Your BI",
  description: "Find your BI help you  and others que look for yours documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased dark">{children}</body>
    </html>
  );
}
