import { Github } from "@/components/ui/github";
import { Link } from "@/components/ui/link";
import Image from "next/image";
import NextLink from "next/link";

export default function V2() {
  return (
    <div className="bg-[#0E0F10] px-8 text-sm">
      <div className="max-w-3xl items-center mx-auto w-full py-16  text-gray-300">
        <div>
          <div className="text-lg text-white font-semibold">
            hi, this is afeef
          </div>
          <div className="text-gray-300">
            I listen{" "}
            <NextLink
              href="https://en.wikipedia.org/wiki/Desi_hip_hop"
              target="_blank"
              className="hover:underline"
            >
              dhh
            </NextLink>{" "}
            and write code. I have 2 years of experience in full stack
            development and building projects from scratch. Reach out to me at{" "}
            <span className="underline">afeefforwork@gmail.com</span> or at{" "}
            <NextLink
              href="https://x.com/Afeefuddin2004"
              className="underline"
              target="_blank"
            >
              <span>x</span>
            </NextLink>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <NextLink
              href="https://github.com/afeefuddin"
              className="hover:underline"
              target="_blank"
            >
              <div>github</div>
            </NextLink>
            <NextLink
              href="https://www.linkedin.com/in/afeef-uddin-2ab567247"
              className="hover:underline"
              target="_blank"
            >
              <div>linkedin</div>
            </NextLink>
            <NextLink
              href="https://x.com/Afeefuddin2004"
              className="hover:underline"
              target="_blank"
            >
              <div>x</div>
            </NextLink>
            <NextLink
              href="https://blog.afeefuddin.me"
              className="hover:underline"
              target="_blank"
            >
              <div>blog</div>
            </NextLink>
            <NextLink
              href="https://drive.google.com/file/d/1mxpB3T7vzIH0n3b3kaV7akmOO5l3iT9H/view?usp=sharing"
              className="hover:underline"
              target="_blank"
            >
              <div>resume</div>
            </NextLink>
          </div>
        </div>
        <div className="w-full border border-white my-4"></div>
        <div className="flex flex-col gap-2">
          <div className="text-lg">Work Experience</div>
          <div className="flex flex-row gap-2">
            <div className="mt-1 w-8 flex-shrink-0">
              <Image
                src="/company/noscrubs.png"
                alt="Noscrubs logo"
                className="rounded"
                width={40}
                height={40}
              />
            </div>
            <div className="w-full">
              <div className="flex flex-row gap-2 justify-between">
                <div>
                  <div className="text-white text-md font-semibold">
                    NoScrubs
                  </div>
                  <div>Software Engineering Intern</div>
                </div>
                <div className="text-xs">Aug 2023 - present</div>
              </div>
              <ul className="ml- list-outside list-disc mt-2">
                <li>
                  Made Scrubber app from scratch in React Native, and refactored
                  customer app by implementing the new design.
                </li>
                <li>
                  Developed and maintained core APIs in Ruby on Rails,
                  supporting key business operations.
                </li>
                <li>
                  Optimised NextJS website to improve the SEO and performance
                  score by 50%.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="mt-1 relative w-8 h-8 flex-shrink-0">
              <Image
                src="/company/gsoc.png"
                alt="GSoC logo"
                width={40} // Adjusted to match design consistency
                height={40}
                className="rounded"
                //   layout="fill"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-row gap-2 justify-between">
                <div>
                  <div className="text-white text-md font-semibold">
                    Google Summer of code
                  </div>
                  <div>Open Source Contributor | Zulip</div>
                </div>
                <div className="text-xs">May 2024 - Aug 2024</div>
              </div>
              <ul className="ml- list-outside list-disc mt-2">
                <li>
                  Migrate 30+ JavaScript Module to TypeScript maintaining 100%
                  typesafety
                </li>
                <li>
                  Refactored unsafe legacy code, achieving 100% type safety
                  through comprehensive type validation.
                </li>
                <li>
                  Modified Node tests to verify the functionality and typing of
                  the codebase.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border border-white my-4"></div>
        <div className="flex flex-col gap-2">
          <div className="text-lg">Projects</div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <div className=" text-md font-semibold">Cuddly</div>
                <Link href="https://cuddly-buddy.vercel.app/" />
                <Github href="https://github.com/algovengers/cuddly" />
              </div>
              <ul className="list-disc ml-4">
                <li>
                  Utilized vector embedding of three pet-related PDFs and
                  implemented the Retrieval-Augmented Generation (RAG) technique
                  to enhance responses from Gemini LLM for a pet care chatbot.
                </li>
                <li>
                  Optimized response time by 70% through Redis caching, reducing
                  database reads.
                </li>
                <li>
                  Deployed using microservices architecture on DigitalOcean with
                  Nginx reverse proxy.
                </li>
                <div>
                  Tech Stack: MERN, Socket.IO, Redis, Flask, Langchain,
                  TypeScript{" "}
                </div>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <div className=" text-md font-semibold">Jawth</div>
                <Link href="https://www.npmjs.com/package/jawth" />
                <Github href="https://github.com/afeefuddin/jawth" />
              </div>
              <ul className="list-disc ml-4">
                <li>
                  Created a library from scratch utilizing the crypto module to
                  implement JSON Web Tokens (JWT).
                </li>
                <li>
                  Incorporated a NextJS project, ensuring compatibility with the
                  Edge runtime.
                </li>
                <li>
                  Developed and executed unit tests to ensure the library’s
                  functionality and reliability.
                </li>
                <div>Tech Stack: TypeScript, NextJS, Jest</div>
              </ul>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <div className=" text-md font-semibold">Mindmate</div>
                <Link href="https://mind-mate-wellness.vercel.app/" />
                <Github href="https://github.com/algovengers/MindMate" />
              </div>
              <ul className="list-disc ml-4">
                <li>
                  Developed an AI-based chat assistant to address mental
                  health-related issues, generating responses with Gemini LLM
                </li>
                <li>
                  Implemented WebSockets for quick responses and persistent
                  connections during chats.
                </li>
                <li>
                  Utilized nodemailer to use an SMTP server in JavaScript to
                  send newsletters to users
                </li>
                <div>Tech Stack: MERN, WebSockets, Gemini, Nodemailer</div>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <div className=" text-md font-semibold">Proparse</div>
                <Github href="https://github.com/afeefuddin/proparse" />
              </div>
              <ul className="list-disc ml-4">
                <li>
                  A minimalistic Javascript library to parse incoming multipart
                  from data
                </li>
                <li>
                  Parses multipart part form data including images coming from
                  raw http request in nodejs
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border border-white my-4"></div>
        <div></div>
      </div>
    </div>
  );
}
