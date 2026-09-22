import { AboutMe } from "../components/AboutMe";
const HomePage = () => {
  return (
    <main className="bg-[#E8EAEB] min-h-screen font-primary overflow-x-clip">
      <article className="max-w-[800px] flex flex-col gap-10 pt-10 mx-auto px-4 md:px-0">
        {/* <Navbar /> */}
        <AboutMe />
      </article>
      {/* Full-width X scroll: first image lines up with the paragraph
          (800px column), rest overflows past the viewport edge. Scrollbar
          hidden via .no-scrollbar. */}
      <div className="w-full pt-10 overflow-x-auto no-scrollbar">
        <div
          className="flex gap-10 w-max max-w-none pr-10"
          style={{ paddingLeft: "max(1rem, calc((100vw - 800px) / 2))" }}
        >
          <img
            src="/design_1.svg"
            className="w-[541px] max-w-none h-auto shrink-0"
          />
          <img
            src="/design_2.svg"
            className="w-[658px] max-w-none h-auto shrink-0"
          />
          <img
            src="/design_3.svg"
            className="w-[658px] max-w-none h-auto shrink-0"
          />
          <img
            src="/design_4.svg"
            className="w-[950px] max-w-none h-auto shrink-0"
          />
        </div>
        {/* <Link to={"/chat-ui"}>
          <div className="border-gray-600 border  w-[700px] h-[550px]"></div>
        </Link>
        <Link to={"/extension-ui"}>
          <div className="border-gray-600 border  w-[700px] h-[550px]"></div>
        </Link> */}
      </div>
      {/* <div>
        <Link to={"/timetracker-ui"}>
          <div className="border-gray-600 border  w-[1400px] mt-2 mx-auto  h-[550px]"></div>
        </Link>
      </div> */}
      {/* <ProjectsSection /> */}
      <article className="max-w-[650px] text-white flex pt-10 flex-col gap-10  mx-auto">
        {/* <MyExperience /> */}
        {/* <TechStack /> */}
      </article>
      <article className="max-w-[650px] text-white  mx-auto">
        {/* <ChatContact /> */}
      </article>
    </main>
  );
};

export default HomePage;
