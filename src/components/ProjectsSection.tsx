import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  href: string;
  // Replace with your actual async-fetched media
  mediaSrc?: string; // image or video URL (populated after fetch)
  mediaType?: "image" | "video";
}

// ─── Placeholder data — swap with your async fetch ───────────────────────────
const PLACEHOLDER_PROJECTS: Project[] = [
  { id: 1, title: "Project Alpha", href: "#" },
  { id: 2, title: "Project Beta", href: "#" },
  { id: 3, title: "Project Gamma", href: "#" },
  { id: 4, title: "Project Delta", href: "#" },
];

// ─── Single Card ──────────────────────────────────────────────────────────────
const ProjectCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-[clamp(260px,30vw,400px)] h-64 rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Media area (placeholder until async data arrives) ── */}
      {project.mediaSrc ? (
        project.mediaType === "video" ? (
          <video
            src={project.mediaSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={project.mediaSrc}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )
      ) : (
        /* Skeleton shimmer while media loads */
        <div className="w-full h-full bg-gray-100 opacity-10" />
      )}

      {/* ── Hover overlay ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 100%)",
          backdropFilter: "blur(4px)",
        }}
      >
        <span className="text-white text-lg font-semibold tracking-wide drop-shadow">
          {project.title}
        </span>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-5 py-2 rounded-full text-sm font-medium
            border border-white/70 text-white
            hover:bg-white hover:text-black
            transition-colors duration-200
          "
          onClick={(e) => e.stopPropagation()}
        >
          View Project ↗
        </a>
      </motion.div>
    </div>
  );
};

// ─── Infinite Scroll Track ────────────────────────────────────────────────────
const SPEED = 1.5; // px per frame — tweak to taste

const InfiniteTrack = ({ projects }: { projects: Project[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const isPaused = useRef(false);

  // Duplicate so the seam is invisible
  const doubled = [...projects, ...projects];

  useAnimationFrame(() => {
    if (isPaused.current) return;
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;
    const next = x.get() - SPEED;
    // Reset once we've scrolled exactly one copy's width
    x.set(next <= -halfWidth ? 0 : next);
  });

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => {
        isPaused.current = true;
      }}
      onMouseLeave={() => {
        isPaused.current = false;
      }}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex gap-4 w-max">
        {doubled.map((project, i) => (
          <ProjectCard key={`${project.id}-${i}`} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
const ProjectsSection = () => {
  // ── Replace this with your real async fetch ──────────────────────────────
  // Example:
  //   const [projects, setProjects] = useState<Project[]>(PLACEHOLDER_PROJECTS);
  //   useEffect(() => {
  //     fetchProjects().then(data => setProjects(data));
  //   }, []);
  const projects = PLACEHOLDER_PROJECTS;

  return (
    <section id="projects" className="max-w-[1600px] px-2 py-5 mx-auto">
      <InfiniteTrack projects={projects} />
    </section>
  );
};

export default ProjectsSection;
