const MyExperience = () => {
  return (
    <section className="flex flex-col gap-6">
      <small className="text-sm uppercase  text-zinc-500">My Experience</small>
      <p className="text-zinc-400">
        Through out my journey, here's a brief relevant overview of what i have
        worked across
      </p>
      <div className="flex justify-between">
        <small className="text-zinc-500 text-sm">2025 - Now</small>
        <div className="max-w-[480px]">
          <h1 className="font-medium">
            Full-Stack Engineer at
            <span className="inline-flex items-center align-middle ml-2 cursor-pointer text-white font-medium">
              <img
                src="/featherflow_logo.jpg"
                className="w-4 h-4 rounded mr-1"
                alt="logo"
              />
              Featherflow
            </span>
          </h1>
          <p className="text-zinc-400">
            Designed, built, and shipped client-facing products from scratch
            collaborating closely with teams to turn ideas into things people
            actually use.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <small className="text-zinc-500">Mid 2024 - 2025</small>
        <div className="max-w-[480px]">
          <h1 className="font-medium">
            FullStack Engineer at
            <span className="inline-flex items-center align-middle cursor-pointer ml-2 text-white font-medium">
              <img
                src="/anchor.webp"
                className="w-4 h-4 rounded mr-1"
                alt="logo"
              />
              AUL
            </span>
          </h1>
          <p className="text-zinc-400">
            Built internal tools from the ground up with the IT department. 900+
            staff use them. Every. Single. Day.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <small className="text-zinc-500">Late 2023 - Early 2024</small>
        <div className="max-w-[480px]">
          <h1 className="font-medium">
            Frontend Intern at
            <span className="inline-flex items-center align-middle cursor-pointer ml-2 text-white font-medium">
              <img src="/hng.png" className="w-4 h-4 rounded mr-1" alt="logo" />
              HNG Tech
            </span>
          </h1>
          <p className="text-zinc-400">
            Worked with world class Developers, to create and ship little
            products and apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
