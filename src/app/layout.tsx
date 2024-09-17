import type { Metadata } from "next";
import Link from "next/link";

import { Package2 } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import ThemeProvider from "@/components/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  description: "A basic Next.js starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😎</text></svg>"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-screen-lg px-4">
            <AppNavbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

function AppNavbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="h-6 w-6" />
        <span className="">Next Starter</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
