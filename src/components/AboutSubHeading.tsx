import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const AboutSubHeading = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".dev-name",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".dev-name",
                    start: "top 80%", // when h1 reaches 80% from the top of the viewport
                    toggleActions: "play reverse play reverse",
                },
                stagger: 0.5,
                duration: 1,
                ease: "power2.inOut",
            }
        );
        gsap.fromTo(
            ".dev-desc",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".dev-desc",
                    start: "top 80%", // when h1 reaches 80% from the top of the viewport
                    toggleActions: "play reverse play reverse",
                },
                stagger: 0.75,
                duration: 1,
                ease: "power2.inOut",
            }
        );
    });
    return (
        <section>
            <div className="flex flex-col xl:flex-row gap-14 mt-10">
                <p className="dev-name text-4xl font-bold tracking-tighter">
                    Hi, I'm Chukwuebuka
                </p>
                <p className="dev-desc xl:w-5xl text-lg text-gray-300">
                    I'm a web developer focused on building AI-powered tools
                    that simplify complexity and deliver real impact. With a
                    solid full-stack background, I craft SaaS platforms and
                    productive solutions that streamline workflows, enhance
                    learning, and support compliance — transforming ideas into
                    results-driven digital experiences.
                </p>
            </div>
        </section>
    );
};

export default AboutSubHeading;
