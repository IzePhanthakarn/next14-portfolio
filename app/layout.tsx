import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tomorrow",
});

export const metadata: Metadata = {
  title: "Phanthakarn's Service",
  description:
    "Phanthakarn's Service is a modern service platform for personal.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={tomorrow.variable}>
        <Providers>
          <main className="font-tomorrow">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
