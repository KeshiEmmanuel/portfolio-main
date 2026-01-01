import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "motion/react";
export const App = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each element loading
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 }, // Start slightly down and invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }, // Smooth spring effect
    },
  };
  return (
    <motion.main
      className="max-w-[1000px] mx-auto py-20 font-primary"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.h1
        className="text-9xl tracking-tight font-medium"
        variants={itemVariants}
      >
        <span className="font-bold">Keshi Chuks</span> Web Developer based in
        Nigeria.
      </motion.h1>

      {/* Description */}
      <motion.p className="text-lg py-8 font-light" variants={itemVariants}>
        I don't just design for aesthetics; I design for growth. I believe the
        right interface bridges the gap between a complex product and a loyal
        customer. My obsession is taking your raw vision and turning it into a
        high-performance asset that builds trust with investors and drives real
        revenue
      </motion.p>

      {/* Bottom Row (CTA + Socials) */}
      <motion.div
        className="flex items-center justify-between w-full"
        variants={itemVariants}
      >
        {/* Your Fixed Hover Effect Button */}
        <div className="group pb-1 border-b-2 w-[20%] font-bold border-b-black flex justify-between transition-colors duration-500 hover:border-b-blue-400 cursor-pointer">
          Get in touch
          <ArrowUpRight className="transform transition-transform duration-500 group-hover:rotate-45" />
        </div>

        {/* Social Icons */}
        <div className="flex items-center py-1 gap-2">
          <a
            target="_blank"
            className="hover:opacity-75 transition-opacity"
            href="https://x.com/_rudosurebec"
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
      </motion.div>
    </motion.main>
  );
};
