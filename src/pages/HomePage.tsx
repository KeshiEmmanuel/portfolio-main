import { Link } from "react-router-dom";
import { AboutMe } from "../components/AboutMe";
import ChatContact from "../components/ChatContact";
import MyExperience from "../components/MyExperience";
import { Navbar } from "../components/Navbar";
import TechStack from "../components/TechStack";

const HomePage = () => {
  return (
    <main className="w-full bg-[#010000]/96 min-h-screen font-primary">
      <article className="max-w-[650px] text-white flex flex-col gap-10  mx-auto">
        <h1 className="text-5xl tracking-tighter pt-5">Revamp in progress</h1>

        {/* <Navbar />
        <AboutMe /> */}
      </article>
      {/* <div className="flex justify-center gap-3 pt-10">
        <Link to={"/chatui"}>
          <div className="border-gray-600 border  w-[700px] h-[550px]"></div>
        </Link>
        <Link to={"/extension-ui"}>
          <div className="border-gray-600 border  w-[700px] h-[550px]"></div>
        </Link>
      </div> */}
      {/* <ProjectsSection /> */}
      {/* <article className="max-w-[650px] text-white flex pt-10 flex-col gap-10  mx-auto"> */}
      {/* <MyExperience /> */}
      {/* <TechStack /> */}
      {/* </article> */}
      {/* <article className="max-w-[650px] text-white  mx-auto"> */}
      {/* <ChatContact /> */}
      {/* </article> */}
    </main>
  );
};

export default HomePage;
