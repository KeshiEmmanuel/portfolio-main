import { AboutMe } from "./components/AboutMe";

const App = () => {
  return (
    <main className="w-full bg-zinc-950 min-h-screen font-primary">
      <article className="max-w-[640px] text-white  mx-auto">
        <AboutMe />
      </article>
    </main>
  );
};

export default App;
