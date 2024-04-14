import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ConvexClientProvider from "@/providers/convex-client-provider";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoVisual",
  description: "Real-Time Collaborative Whiteboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster theme="light" closeButton richColors />
          {children}
        </ConvexClientProvider>{" "}
      </body>
    </html>
  );
}
