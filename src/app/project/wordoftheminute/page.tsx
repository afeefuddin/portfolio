import Image from "next/image";

export default function Wordoftheminute() {
  return (
    <section className="my-4">
      <Image
        src="/wordoftheminute.png"
        width={10000000}
        blurDataURL="LXOO3Qof7MWX~of6ngj[9Gay-pj["
        height={10000}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg"
        alt="wordoftheminute image"
        placeholder="blur"
      />
      <div className="animate-text-fade-in flex pt-8 flex-row justify-between items-center">
        <a
          className="group"
          href="https://wordoftheminute.pages.dev"
          target="_blank"
        >
          <div>
            <h1 className="group-hover:underline text-2xl font-bold">
              Wordoftheminute
            </h1>
            <h2 className="group-hover:underline text-muted-foreground ">
              Make your favourite the word of the minute
            </h2>
          </div>
        </a>
        <div className="gap-2  animate-text-fade-in flex flex-row">
          <a
            className="text-blue-500"
            target="_blank"
            href="https://github.com/afeefuddin/wordoftheminute"
          >
            Github
          </a>
          <a
            className="text-blue-500"
            target="_blank"
            href="https://wordoftheminute.pages.dev"
          >
            Website
          </a>
        </div>
      </div>
      <div className="pt-8 animate-text-fade-in">
        <p>
          Word of the minute is a fun project I built over the weekends to learn
          Golang practically.
          <br />
          The concept is simple: anyone can submit their favourite words every
          minute and words are ranked based on their frequency of submission{" "}
          <span className="italic">every minute</span>. At the end of the
          minute, the word ranked with the highest frequency becomes the{" "}
          <span className="italic">Word of the minute</span>.
          <br />
          <br />
          This process repeats every minute (until I decide to shut down the
          project).
          <br />
          <br />
          Once a word is crowned{" "}
          <span className="font-semibold">Word of the Minute</span>, it is
          permanently locked in as the official word for that minute—no one, not
          even me, can change it. (Trust me, bro!){" "}
        </p>
      </div>
      <h4 className="animate-text-fade-in my-4 text-muted-foreground">
        <span className="font-medium">Tech Stack:</span>{" "}
        <span className="italic">Go, SolidJS, Redis, Postgresql</span>
      </h4>
    </section>
  );
}
