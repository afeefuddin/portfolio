import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afeefuddin",
  description:
    "Afeef is full stack developer who is passionate about software engineering and web development",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}
