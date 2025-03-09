import { ArrowTopRightIcon, CopyIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";

const geistFont = localFont({
  src: "../../public/fonts/Geist/Geist-VariableFont_wght.ttf",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Afeefuddin",
  description:
    "Afeef is full stack developer who is passionate about software engineering and web development",
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en ">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${geistFont.className} `}>
        <div className="min-h-screen">
          <div className="min-h-screen max-w-3xl mx-auto w-full p-4 flex flex-col h-full">
            <div className="flex justify-between w-full py-8">
              <Link href="/">afeef</Link>
              <div className="flex gap-4">
                <Link href="https://blog.afeefuddin.com" target="_blank">
                  blogs
                </Link>
                <Link
                  href="https://github.com/afeefuddin"
                  className="hover:underline"
                  target="_blank"
                >
                  github
                </Link>
                <Link href="/resume" className="hover:underline">
                  resume
                </Link>
              </div>
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
