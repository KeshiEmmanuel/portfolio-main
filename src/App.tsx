import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export const App = () => {
    return (
        <main className="max-w-[600px] mx-auto py-20 font-primary">
            <h1 className="text-xl font-semibold">
                Hi, I'm Chukwuebuka Oluwatobi
            </h1>
            <p className="text-sm text-gray-700 py-1">
                17yo Software Engineer with passion for building apps.
            </p>
            <div className="flex items-center py-1 gap-2">
                <a
                    target="_blank"
                    className="hover:opacity-75 transition-opacity"
                    href="https://x.com/001Solopreneur"
                >
                    <FaXTwitter />
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/keshiemmanuel/"
                    className="hover:opacity-75 transition-opacity"
                >
                    <FaLinkedin />
                </a>
                <a
                    target="_blank"
                    href="mailto:keshichukwuebuka@gmail.com"
                    className="hover:opacity-75 transition-opacity"
                >
                    <IoMdMail />
                </a>
            </div>
        </main>
    );
};
