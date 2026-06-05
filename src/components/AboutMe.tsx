import SeeWorkButton from "./SeeMyWorkButton";

export const AboutMe = () => {
  return (
    <section className="px-5 lg:px-0  h-full flex flex-col gap-6 pt-20">
      <div>
        <h1 className="text-xl font-medium">
          I'm Keshi Chukwuebuka{" "}
          <span className="inline-flex items-center align-middle">
            <img src="/checkmark.png" className="w-5 h-5" alt="cracked" />
          </span>{" "}
        </h1>
        <small className="text-zinc-500 text-sm">
          Engineering / AI / Product
        </small>
      </div>
      <div>
        <div>
          <p className="text-zinc-400 leading-tight">
            I'm 18, and I've been shipping products people actually use for over
            3 years. At 13, I built a birthday notification system for my
            parents just because I could. Since then, I've built AI content
            workflows for Fortune 500 marketers and an AI exeat agent that
            4,000+ university students rely on daily. currently at
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
      <div>
        <SeeWorkButton text="See My Works" />
      </div>
    </section>
  );
};
