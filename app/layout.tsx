import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional (if using CSS variable)
  display: "swap", // recommended to avoid FOUT
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "Calyx Protocol",
  description: "We verify sustainability at the protocol level.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* just expose the variables, don’t force font-sans here */}
      <body className={`${inter.variable} ${libreBaskerville.variable}`}>
        {children}
      </body>
    </html>
  );
}
