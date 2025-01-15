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
                <Link href="https://blog.afeefuddin.me" target="_blank">
                  blogs
                </Link>
                <Link href="https://github.com/afeefuddin" target="_blank">
                  github
                </Link>
                <Link href="/resume">resume</Link>
              </div>
            </div>

            <div className="flex-1">{children}</div>
            <div className="pt-4">
              <div className="font-bold text-lg md:text-xl">
                Lets Get in touch
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div className="flex flex-wrap gap-8 p-4">
                  <Link
                    href="https://x.com/Afeefuddin2004"
                    target="_blank"
                    className="group"
                  >
                    <div className="flex items-center gap-1 group-hover:underline">
                      <div>Twitter</div>
                      <ArrowTopRightIcon />
                    </div>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/afeef-uddin-2ab567247"
                    target="_blank"
                    className="group"
                  >
                    <div className="flex items-center gap-1 group-hover:underline">
                      <div>Linkedin</div>
                      <ArrowTopRightIcon />
                    </div>
                  </Link>

                  <Link
                    href="https://github.com/afeefuddin"
                    target="_blank"
                    className="group"
                  >
                    <div className="flex items-center gap-1 group-hover:underline">
                      <div>Github</div>
                      <ArrowTopRightIcon />
                    </div>
                  </Link>
                </div>
                <div className="text-sm text-muted mx-auto sm:mx-0">
                  <Link href="/yesitchanges">
                    © {new Date().getFullYear()} Afeefuddin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
