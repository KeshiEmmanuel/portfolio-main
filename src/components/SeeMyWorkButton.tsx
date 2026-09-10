import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
export default function SeeWorkButton({ text }: { text: string }) {
  return (
    <button className="button h-7 px-2 inline-flex items-center text-sm">
      <span>{text}</span>
      <span> </span>
    </button>
  );
}
