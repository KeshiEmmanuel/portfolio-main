import { AboutMe } from "./components/AboutMe";
import MyExperience from "./components/MyExperience";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <main className="w-full bg-zinc-950 min-h-screen font-primary">
      <article className="max-w-[680px] text-white flex flex-col gap-10  mx-auto">
        <AboutMe />
        <MyExperience />
        <TechStack />
      </article>
    </main>
  );
};

export default App;
