import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import { Contact } from "./sections/Contact";

export default function App() {
    return (
        <div className="max-container">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}
