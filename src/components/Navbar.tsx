import { FaPaperPlane } from "react-icons/fa6";
import { useRef } from "react";
import gsap from "gsap";
const Navbar = () => {
    const planeRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        gsap.to(planeRef.current, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
        });
    };
    const handleMouseLeave = () => {
        gsap.to(planeRef.current, {
            opacity: 0,
            y: 50,
            ease: "power2.in",
        });
    };
    return (
        <nav>
            <div className="pt-5 flex items-center justify-between">
                <div>
                    <img
                        src="/main-logo.svg"
                        alt="mainlogo"
                        className="w-8 h-8"
                    />
                </div>
                <div className="flex items-center gap-5 primary-font">
                    <ul className="flex items-center gap-2">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                    </ul>
                    <button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="bg-white/85 relative w-[140px]  hover-btn cursor-pointer flex items-center text-black py-2 font-semibold rounded-md px-5 backdrop-blur-2xl"
                    >
                        Contact me
                        <div
                            ref={planeRef}
                            className="absolute right-3"
                            style={{
                                opacity: 0,
                            }}
                        >
                            <FaPaperPlane className="plane-icon text-sm" />
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
