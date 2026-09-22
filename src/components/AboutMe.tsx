// import SeeWorkButton from "./SeeMyWorkButton";

export const AboutMe = () => {
  return (
    <section className=" lg:px-0  h-full flex flex-col gap-3">
      <div className="flex flex-col w-full items-end">
        <h1 className=" font-display text-[40px]">Ebuka</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <p
            className="text-[#3D3D3D] w-full font-mono text-sm"
            style={{
              lineHeight: "18px",
            }}
          >
            am 18, obsessed with designing and building products and features
            people actually use.i take ownership of whatever am building end to
            end (from design to production) with or without a PM. i love
            designing not just designing..but designing with care and taste for
            whatever product i lay my hands [from the pharse you should feel how
            i hate AI slop], if am not designing and shipping am either
            doomscrolling, watching movies or gaming. my final designs are
            always at Frame 2039 or more :)
          </p>
        </div>
        <a
          href="mailto:keshichukwuebuka@gmail.com"
          target="_blank"
          className="cursor-pointer"
        >
          <button
            className="w-fit text-[#FCFCFC] font-mono"
            style={{
              paddingInline: "16px",
              paddingBlock: "10px",
              backgroundColor: "#1E1E1F",
            }}
          >
            Contact Me
          </button>
        </a>
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
      </div>
    </section>
  );
};
