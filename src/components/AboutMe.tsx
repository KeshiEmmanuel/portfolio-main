import React from "react";
import SeeWorkButton from "./SeeMyWorkButton";

export const AboutMe = () => {
  return (
    <section className="h-full flex flex-col gap-4 pt-40">
      <div>
        <h1 className="text-xl font-medium">I'm Keshi Chukwuebuka</h1>
        <small className="text-zinc-500 text-sm">
          Engineering / AI / Product
        </small>
      </div>
      <div>
        <p className="text-zinc-400  leading-tight">
          I'm 18, and I've been shipping products people actually use for over 3
          years. At 13, I built a birthday notification system for my parents
          just because I could. Since then, I've built AI content workflows for
          Fortune 500 marketers and an AI exeat agent that 4,000+ university
          students rely on daily. currently at Featherflow
        </p>
      </div>
      <div>
        <SeeWorkButton text="See My Works" />
      </div>
    </section>
  );
};
