import type { Metadata } from "next";

import AppNavbar from "@/components/app-navbar";
import AppProviders from "@/components/app-providers";

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
        <AppProviders>
          <div className="mx-auto max-w-screen-lg px-4">
            <AppNavbar />
            <main>{children}</main>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
