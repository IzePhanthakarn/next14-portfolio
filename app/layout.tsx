import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";

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
    <StoreProvider>
      <html lang="en">
        <body className={tomorrow.variable}>
          <div className="font-tomorrow">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
