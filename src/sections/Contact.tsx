import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

export const Contact = () => {
    return (
        <section className="section-padding">
            <div className="grid xl:grid-cols-2">
                <div>
                    <h1 className="text-6xl secondary-font font-bold">
                        Contact Me
                    </h1>
                    <p className="primary-font py-7 xl:w-[550px] text-gray-300">
                        I'm always open to collaborating on exciting projects,
                        discussing innovative ideas, or exploring freelance
                        opportunities in web development and AI.
                    </p>
                </div>
                <div className="flex items-center text-2xl gap-5 self-start xl:justify-self-end text-gray-300">
                    <a href="mailto:keshichidera@gmail.com" target="_blank">
                        <IoMdMail />
                    </a>
                    <a href="https://github.com/keshiEmmanuel" target="_blank">
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/keshiemmanuel/"
                        target="_blank"
                    >
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/keshichidera" target="_blank">
                        <FaTwitter />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1lwC7xKEUPrsp2C16OR3Xs6SYJzDzUvDR/view?usp=drive_link"
                        target="_blank"
                        className="text-sm cursor-pointer flex items-center gap-1 duration-400 rounded-full primary-font bg-white backdrop-blur-md text-black py-2 px-5 hover:bg-gray-300"
                    >
                        View Resume
                        <FiExternalLink />
                    </a>
                </div>
            </div>
        </section>
    );
};
