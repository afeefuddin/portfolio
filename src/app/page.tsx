import Image from "next/image";
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Work({
  h1,
  h2,
  imageAlt,
  imageUrl,
  timeline,
}: {
  h1: string;
  h2: string;
  imageUrl: string;
  imageAlt: string;
  timeline: string;
}) {
  return (
    <div className="flex gap-4 p-2 md:p-4 group cursor-pointer">
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
  );
}

function Project({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank">
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
    <div className="flex flex-col gap-8">
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
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold md:text-xl">Side Projects</div>
        <div className="flex flex-col ">
          <Project
            name="Wordoftheminute"
            link="https://wordoftheminute.pages.dev"
            description="Make your faviourite words the word of the minute"
          />
          <Project
            name="Cuddly"
            link="https://cuddly-buddy.vercel.app/"
            description="One stop platform for all your pet related problems"
          />
          <Project
            name="Jawth"
            description="A minimalistic JWT library"
            link="https://www.npmjs.com/package/jawth"
          />
          <Project
            name="Mindmate"
            link="https://mind-mate-wellness.vercel.app"
            description="A mental health chatbot with to analyse your mental health"
          />
        </div>
      </div>
    </div>
  );
}
