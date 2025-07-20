"use client";

import Link from "next/link";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import clsx from "clsx";
import Image from "next/image";

export default function ThemeWrapper({
  children,
  geistFont,
  ghibliFont,
}: {
  children: React.ReactNode;
  geistFont: string;
  ghibliFont: string;
}) {
  const [ghibliTheme, setGhibliTheme] = useState(false);

  return (
    <>
      <div className="fixed inset-0 -z-10">
        {ghibliTheme && (
          <Image
            src="/vibes-min.png"
            alt="Vibes"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        )}
      </div>
      <div
        className={clsx(
          "relative h-full overflow-y-auto min-h-screen",
          ghibliTheme ? `ghibli-theme ${ghibliFont}` : geistFont
        )}
      >
        <div className="max-w-3xl mx-auto w-full p-4 flex flex-col min-h-screen">
          <div className="flex justify-between items-center w-full py-8">
            <Link href="/">afeef</Link>
            <div className="flex gap-4 items-center">
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
              {/* <Switch checked={ghibliTheme} onCheckedChange={setGhibliTheme} /> */}
            </div>
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
}
