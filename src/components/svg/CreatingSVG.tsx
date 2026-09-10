import { motion } from "motion/react";

export const CreatingSVG = () => {
  // Shared cycle length — eyes and pencil stay phase-related, not identical
  const cycle = 1.4;

  return (
    <svg
      width="28"
      height="27"
      className="head overflow-visible"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="eye eye-left"
        d="M0 15.9091C0 6.36364 4.8 0 10.2 0C14.4 0 16.8 3.81818 16.8 8.27273C16.8 17.1818 12.6 21 6.6 21C2.4 21 0 19.7273 0 15.9091Z"
        fill="#021A33"
      />

      {/* Pupils: smoother, smaller-range, and delayed — they're
          reacting to the pencil, not driving the motion */}
      <motion.path
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={{
          x: [1.1, 1.7, 0.8, 1.5, 1.1],
          y: [0.4, 0.8, 0.1, 0.6, 0.4],
        }}
        transition={{
          duration: cycle,
          delay: 0.12, // overlapping action — trails the pencil slightly
          times: [0, 0.3, 0.55, 0.8, 1],
          ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut"],
          repeat: Infinity,
          repeatType: "loop",
        }}
        d="M7.7998 14.3185C8.62823 14.3185 9.2998 13.6063 9.2998 12.7276C9.2998 11.849 8.62823 11.1367 7.7998 11.1367C6.97138 11.1367 6.2998 11.849 6.2998 12.7276C6.2998 13.6063 6.97138 14.3185 7.7998 14.3185Z"
        fill="#EDF3FA"
      />
      <motion.path
        className="eye eye-right"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={{
          x: [1.1, 1.7, 0.8, 1.5, 1.1],
          y: [0.4, 0.8, 0.1, 0.6, 0.4],
        }}
        transition={{
          duration: cycle,
          delay: 0.12,
          times: [0, 0.3, 0.55, 0.8, 1],
          ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut"],
          repeat: Infinity,
          repeatType: "loop",
        }}
        d="M12 14.3185C12.8284 14.3185 13.5 13.6063 13.5 12.7276C13.5 11.849 12.8284 11.1367 12 11.1367C11.1716 11.1367 10.5 11.849 10.5 12.7276C10.5 13.6063 11.1716 14.3185 12 14.3185Z"
        fill="#EDF3FA"
      />

      {/* Pencil: arced, staccato scribble. Snappy dart out (circOut),
          soft settle back (easeInOut) — mimics stroke + brief hold */}
      <motion.path
        className="pencil"
        style={{ transformBox: "fill-box", transformOrigin: "15% 15%" }}
        initial={{ x: 0, y: 0, rotate: -20 }}
        animate={{
          x: [0, -1.6, 2.6, -1.1, 1.9, 0],
          y: [0, 1.6, -1.3, 1.9, -0.7, 0],
          rotate: [-20, -13, -29, -16, -25, -20],
        }}
        transition={{
          duration: cycle,
          times: [0, 0.12, 0.4, 0.58, 0.85, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        d="M20 20.7749L21.9565 20.7749L21.9565 18.8184L16.1861 13.0479L14.2296 15.0045L20 20.7749ZM14.6731 11.5349C14.6248 11.4865 14.5675 11.4482 14.5043 11.422C14.4412 11.3958 14.3736 11.3823 14.3052 11.3823C14.2369 11.3823 14.1692 11.3958 14.1061 11.422C14.043 11.4482 13.9857 11.4865 13.9374 11.5349L12.7165 12.7558C12.6682 12.804 12.6298 12.8614 12.6036 12.9245C12.5774 12.9876 12.564 13.0553 12.564 13.1236C12.564 13.1919 12.5774 13.2596 12.6036 13.3227C12.6298 13.3858 12.6682 13.4432 12.7165 13.4914L13.6713 14.4462L15.6278 12.4897L14.6731 11.5349Z"
        fill="#021A33"
      />
    </svg>
  );
};
