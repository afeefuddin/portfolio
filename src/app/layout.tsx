import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ThemeWrapper from "@/components/themes-wrapper";

const geistFont = localFont({
  src: "../../public/fonts/Geist/Geist-VariableFont_wght.ttf",
  variable: "--font-geist",
});

const ghibliFont = localFont({
  src: "../../public/fonts/sawarabiMincho/SawarabiMincho-Regular.ttf",
  variable: "--font-sawarbi",
});

export const metadata: Metadata = {
  title: "Afeefuddin",
  description:
    "Afeef is full stack developer who is passionate about software engineering and web development",
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistFont.className} antialiased`}>
        <ThemeWrapper
          geistFont={geistFont.className}
          ghibliFont={ghibliFont.className}
        >
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
