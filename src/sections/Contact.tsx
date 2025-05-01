import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

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
                </div>
            </div>
        </section>
    );
};
