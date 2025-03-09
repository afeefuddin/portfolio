import Image from "next/image";

export default function NoScrubs() {
  return (
    <section className="my-4">
      <div className="animate-text-fade-in flex pt-8 flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <a href="https://noscrubs.com" target="_blank">
            <Image
              src="/company/noscrubs.png"
              alt="Noscrubs Logo"
              className="rounded-sm"
              width={80}
              height={80}
            />
          </a>
          <div>
            <a href="https://noscrubs.com" target="_blank">
              <h1 className="text-2xl font-bold">NoScrubs</h1>
            </a>
            <h2 className="text-muted-foreground">
              Software Engineering Intern
            </h2>
            <h3 className="text-sm text-muted-foreground">
              Aug 2024 - Present
            </h3>
          </div>
        </div>
      </div>
      <div className="pt-8 animate-text-fade-in">
        <p>
          NoScrubs is the fastest, most affordable laundry delivery service
          based out in Texas, United States.
          <br />
          <br />
          I joined NoScrubs in August 2024 as a Software Engineering Intern. I
          was the 2nd employee, 1st engineering hire, and the 5th team member,
          giving me the opportunity to help build the system from the ground up
          <br />
          I work primarily with React Native and Ruby on Rails, developing
          features from scratch to enhance the experience for both scrubbers and
          customers.
          <br />
          <br />
          My work at NoScrubs:
          <br />
        </p>
        <ul className="list-disc list-outside ml-4">
          <li>
            Developed a{" "}
            <strong className="font-bold">Server-Driven UI architecture</strong>{" "}
            to make the app more dynamic, enabling faster updates and
            improvements.
          </li>
          <li>
            Built the{" "}
            <strong className="font-bold">Scrubber app from scratch</strong> and
            iterated on it multiple times.
          </li>
          <li>
            Revamped the Customer app, continuously refining and enhancing it.
          </li>
          <li>
            <strong>Integrated third-party APIs </strong>such as DoorDash and
            Pex to streamline business operations.{" "}
          </li>
          <li>
            Designed and implemented key business features to optimize
            efficiency and scalability.
          </li>
          <li>
            Improved the performance of our NextJS website by 30% by using
            treeshaking and improving redundant code
          </li>
        </ul>
      </div>
      <h4 className="animate-text-fade-in my-4 text-muted-foreground">
        <span className="font-medium">Worked with</span>{" "}
        <span className="italic">
          Ruby on Rails, React Native, NextJS, Postgresql.
        </span>
      </h4>
    </section>
  );
}
