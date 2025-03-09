import Image from "next/image";

export default function Pyezza() {
  return (
    <section className="my-4">
      <Image
        src="/pyezza.png"
        width={10000000}
        height={10000}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg"
        alt="wordoftheminute image"
      />
      <div className="animate-text-fade-in flex pt-8 flex-row justify-between items-center">
        <a
          className="group"
          href="https://pyezza.afeefuddin.com"
          target="_blank"
        >
          <div>
            <h1 className="group-hover:underline text-2xl font-bold">Pyezza</h1>
            <h2 className=" group-hover:underline text-muted-foreground ">
              Unlimited virtual pizzas and pies.
            </h2>
          </div>
        </a>
        <div className="gap-2  animate-text-fade-in flex flex-row">
          <a
            className="text-blue-500"
            href="https://github.com/afeefuddin/pyezza"
            target="_blank"
          >
            Github
          </a>
          <a
            className="text-blue-500"
            href="https://pyezza.afeefuddin.com"
            target="_blank"
          >
            Website
          </a>
        </div>
      </div>
      <div className="pt-8 animate-text-fade-in">
        <p>
          Pyezza is a social Slack bot that brings teams closer through engaging
          conversations and interactive prompts.
          <br />
          <br />
          It seamlessly integrates into your Slack workspace, sparking
          discussions with fun challenges, icebreakers, and thought-provoking
          questions. Whether your team is remote or in-office, Pyezza keeps the
          energy alive and ensures no one feels left out.
          <br />
          <br />
          Once it kicks off a conversation, the rest is up to your team—Pyezza
          simply creates the space for meaningful interactions.
        </p>
      </div>
      <h4 className="animate-text-fade-in my-4 text-muted-foreground">
        <span className="font-medium">Built With</span>{" "}
        <span className="italic">NextJS, Postgresql, Clerk, Trigger.dev</span>
      </h4>
    </section>
  );
}
