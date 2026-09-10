import SeeWorkButton from "./SeeMyWorkButton";

export const AboutMe = () => {
  return (
    <section className="px-5 lg:px-0  h-full flex flex-col gap-3 pt-10">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-2xl tracking-tighter  text-balance font-medium">
          I'm Keshi Chukwuebuka{" "}
          <span className="inline-flex items-center align-middle">
            <img src="/checkmark.png" className="w-5 h-5" alt="cracked" />
          </span>{" "}
        </h1>
        <small className="text-gray-400/75 text-xs">
          Design & Product Engineer
        </small>
      </div>
      <div>
        <div>
          <p className="text-gray-300 text-pretty text-sm">
            I'm 18, and I've been shipping products people actually use for over
            3 years. It started at 13, I built a birthday notification system
            for my parents, just because I could. Since then I've worked with a
            client doing $7M ARR, and led development for an AI exeat agent
            currently rolling out to serve over 3,000+ university students.
            currently at
            <span className="inline-flex items-center align-middle cursor-pointer ml-2 text-white font-medium">
              <img
                src="/featherflow_logo.jpg"
                className="w-4 h-4 rounded mr-1"
                alt="logo"
              />
              Featherflow
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        {/* <a
          className="inline-flex items-center gap-1 duration-500 hover:underline"
          href="https://www.linkedin.com/in/keshiemmanuel/"
          target="_blank"
        >
          <span className="text-sm text-zinc-400">Chat w/ me</span>{" "}
          <img src="/linkedin.svg" className="w-6" />
        </a>
        <a
          className="inline-flex items-center duration-500 hover:underline  gap-1"
          href="https://x.com/_rudosurebec"
          target="_blank"
        >
          <span className="text-sm text-zinc-400">Vibe w/ me</span>{" "}
          <img src="/twitter.svg" className="w-5" />
        </a> */}
        <a href="mailto:keshichukwuebuka@gmail.com" target="_blank">
          <SeeWorkButton text="Contact Me" />
        </a>
      </div>
    </section>
  );
};
