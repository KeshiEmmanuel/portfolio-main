import { FaCircleChevronDown } from "react-icons/fa6";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power2.inOut",
            }
        );
    });

    return (
        <section className="section-padding">
            <div className="flex flex-col font-bold tracking-tight py-2 text-gradient primary-font">
                <div className="hero-text">
                    <h1 className="text-gradient">
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
                    <h1 className="text-gradient">into standout,</h1>
                    <h1 className="text-gradient">results-driven solutions</h1>
                </div>
            </div>

            <p className="primary-font text-lg text-stone-400 pt-2 pb-5">
                Hi,i'm <strong className="text-white">Chukwuebuka</strong> a
                developer based in Nigeria, with unfathomable passion for
                building seamless and scalable <br />
                frontend solutions that aligns with User’s needs.
            </p>
            <button className="bg-white/85 primary-font rounded-md py-2 px-4 backdrop-blur-xl text-black flex items-center gap-2">
                See my work <FaCircleChevronDown className="animate-bounce" />
            </button>
        </section>
    );
}

export default Hero;
