import Image from "next/image";
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Work({
  h1,
  h2,
  imageAlt,
  imageUrl,
  timeline,
  url,
  target,
}: {
  h1: string;
  h2: string;
  imageUrl: string;
  imageAlt: string;
  timeline: string;
  url: string;
  target: "_blank" | "_self";
}) {
  return (
    <Link href={url} target={target}>
      <div className="flex gap-4 p-2 md:p-4 group cursor-pointer animate-text-fade-in">
        <div className="mt-1 w-10 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            className="rounded-sm"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col sm:flex-row flex-1 justify-between">
          <div className="flex-1">
            <div className="text-lg font-semibold group-hover:underline">
              {h1}
            </div>
            <div className="group-hover:underline text-muted">{h2}</div>
          </div>
          <div className="text-muted text-wrap">{timeline}</div>
        </div>
      </div>
    </Link>
  );
}

function Project({
  name,
  description,
  link,
  blank = true,
}: {
  name: string;
  description: string;
  link: string;
  blank?: boolean;
}) {
  return (
    <Link href={link} target={blank ? "_blank" : "_self"} prefetch>
      <div className="flex group justify-between items-center hover:bg-accent/20 p-2 md:p-4 rounded-lg hover:cursor-pointer gap-1">
        <div>
          <div className="font-semibold text-lg">{name}</div>
          <div className="text-muted">{description}</div>
        </div>
        <div>
          <ArrowRightIcon className="transition-transform duration-500 group-hover:-rotate-45" />
        </div>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col gap-8 animate-text-fade-in">
        <div className="py-8 text-xl md:text-2xl ">
          Hi, I’m Afeef – a passionate software engineer from India. I love
          building products and features that bring joy and drive meaningful
          change.
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg md:text-xl">Work Experience</div>
          <div className="flex flex-col ">
            <Work
              h1="NoScrubs"
              h2="Software Engineering Intern"
              imageAlt="NoScrubs Logo"
              imageUrl="/company/noscrubs.png"
              timeline="Aug 2024 - Present"
              url="/work/noscrubs"
              target="_self"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg md:text-xl">
            Open Source Contributions
          </div>
          <div className="flex flex-col">
            <Work
              h1="Zulip"
              h2="Google Summer of Code Contriubtor"
              imageAlt="Google Summer of Code Logo"
              imageUrl="/company/gsoc.png"
              timeline="May 2024 - Aug 2024"
              target="_blank"
              url="https://gist.github.com/afeefuddin/bcaad3f9aaee55d0be5685dcfb815917"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold md:text-xl">Side Projects</div>
          <div className="flex flex-col ">
            <Project
              name="Pyezza"
              blank={false}
              link="/project/pyezza"
              description="A Social Slack Integration Bot"
            />
            <Project
              name="Wordoftheminute"
              blank={false}
              link="/project/wordoftheminute"
              description="Make your faviourite words the word of the minute"
            />
            <Project
              name="Jawth"
              description="A minimalistic JWT library"
              link="https://www.npmjs.com/package/jawth"
            />
            <Project
              name="Http Server in C"
              link="https://github.com/afeefuddin/express.c"
              description="A minimal Http Server implementation"
            />
            <Project
              name="Mindmate"
              link="https://mind-mate-wellness.vercel.app"
              description="A mental health chatbot with to analyse your mental health"
            />
            <Project
              name="ProParse"
              link="https://github.com/afeefuddin/Proparse"
              description="A little implementation to parse multipart form data in node.js"
            />
            <Project
              name="Vimwhere"
              link="https://github.com/afeefuddin/vimwhere"
              description="Use vim everywhere"
            />
          </div>
        </div>
      </div>

      <div className="pt-4 animate-text-fade-in">
        <div className="font-bold text-lg md:text-xl">Let's Get in touch</div>
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

            <Link href="https://github.com/afeefuddin" target="_blank" className="group">
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
    </>
  );
}
