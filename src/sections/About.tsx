import AboutSubHeading from "../components/AboutSubHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
function About() {
    useGSAP(() => {
        gsap.fromTo(
            ".section-heading",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".section-heading",
                    start: "top 80%", // when h1 reaches 80% from the top of the viewport
                    toggleActions: "play reverse play reverse",
                },
                stagger: 0.5,
                duration: 1,
                ease: "power2.inOut",
            }
        );
    });
    return (
        <section className="section-padding primary-font" id="about">
            <p className="py-2 rounded-full mb-5 bg-gray-700/40 backdrop-blur-lg w-[8rem] flex justify-center text-gray-300">
                About me ⚡
            </p>
            <h1 className="section-heading font-light text-5xl xl:text-7xl text-gray-100 tracking-tight secondary-font">
                I turn ideas and designs into unique,
                <br /> results-driven solutions — blending creativity and
                purpose to build impactful digital experiences.
            </h1>
            <AboutSubHeading />
        </section>
    );
}

export default About;
