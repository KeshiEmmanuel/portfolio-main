import { FaCircleChevronDown } from "react-icons/fa6";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Hero() {
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            {
                y: 0,
                scrollTrigger: {
                    trigger: ".hero-text h1",
                    start: "top 80%", // when h1 reaches 80% from the top of the viewport
                    toggleActions: "play reverse play reverse",
                },
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power1.inOut",
            }
        );
        gsap.fromTo(
            ".hero-subheading",
            {
                opacity: 0,
                y: -50,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                scrollTrigger: {
                    trigger: ".hero-subheading",
                    start: "top 70%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );
    });

    return (
        <section className="section-padding">
            <div className="flex flex-col font-bold primary-font">
                <div className="hero-text secondary-font ">
                    <h1 className="text-gradient sm:h-[60px] md:h-[65px] lg:h-[75px]">
                        Transforming
                        <span className="slide">
                            <span className="wrapper text-gradient">
                                {words.map((word, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center md:gap-3 gap-1 pb-2"
                                    >
                                        <img
                                            src={word.imgPath}
                                            alt="person"
                                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full  bg-white"
                                        />
                                        <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1 className="text-gradient">into unique,</h1>
                    <h1 className="text-gradient">results-driven solutions</h1>
                </div>
            </div>

            <p className="primary-font hero-subheading lg:text-lg text-stone-400 lg:pt-2 py-5 lg:pb-5">
                Hi,i'm <strong className="text-white">Chukwuebuka</strong> a
                developer based in Nigeria, with unfathomable passion for
                building seamless and scalable{" "}
                <br className="hidden lg:block" />
                solutions that aligns with User’s needs.
            </p>
            <a href="#work">
                <button className="bg-white/85 primary-font rounded-md py-2 px-4 backdrop-blur-xl text-black flex items-center gap-2">
                    See my work{" "}
                    <FaCircleChevronDown className="animate-bounce" />
                </button>
            </a>
        </section>
    );
}

export default Hero;
