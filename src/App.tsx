import { AboutMe } from "./components/AboutMe";
import MyExperience from "./components/MyExperience";
import { Navbar } from "./components/Navbar";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <main className="w-full bg-zinc-950 min-h-screen font-primary">
      <article className="max-w-[650px] text-white flex flex-col gap-10  mx-auto">
        <Navbar />
        <AboutMe />
        <MyExperience />
        <TechStack />
      </article>
    </main>
  );
};

export default App;
