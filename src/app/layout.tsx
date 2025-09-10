import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";

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
    <html lang="pt" suppressHydrationWarning>
      <body className="antialiased" cz-shortcut-listen="true">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
