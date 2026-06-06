import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  href: string;
  mediaSrc?: string; // Cloudinary video URL (populated after fetch)
}

// ─── Project data ─────────────────────────────────────────────────────────────
const PROJECT_DATA: Project[] = [
  {
    id: 1,
    title: "Hilink",
    href: "https://camptraveler-ux.vercel.app/",
    mediaSrc:
      "https://res.cloudinary.com/didojkp5o/video/upload/v1780785990/hilink_y3fzrk.mp4",
  },
  {
    id: 2,
    title: "Obrien",
    href: "https://keshi-first-project.webflow.io/",
    mediaSrc:
      "https://res.cloudinary.com/didojkp5o/video/upload/v1780786061/obrien_g61shk.mp4",
  },
  {
    id: 3,
    title: "Zentry Clone",
    href: "https://react-awwward-clone.vercel.app/",
    mediaSrc:
      "https://res.cloudinary.com/didojkp5o/video/upload/v1780786676/zentryclone_lr8mmo.mp4",
  },
  {
    id: 4,
    title: "Forcythe",
    href: "https://forcythe-clone-sigma.vercel.app/",
    mediaSrc:
      "https://res.cloudinary.com/didojkp5o/video/upload/v1780786800/forcythe-showcase_mfyfuk.mp4",
  },
];

// ─── Fetch function ───────────────────────────────────────────────────────────
async function fetchProjects(): Promise<Project[]> {
  // TODO: replace with your real fetch, e.g.:
  // const res = await fetch("/api/projects");
  // return res.json();
  return Promise.resolve(PROJECT_DATA);
}

// ─── Single Card ──────────────────────────────────────────────────────────────
const ProjectCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Guarantee autoplay even when the browser's autoplay policy is cautious
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.play().catch(() => {
      // Autoplay was blocked — muted autoplay is almost always allowed,
      // but this catch prevents an unhandled promise rejection.
    });
  }, [project.mediaSrc]);

  return (
    <div
      className="relative flex-shrink-0 w-[clamp(260px,30vw,400px)] h-64 rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Skeleton: visible until the video has buffered enough to play ── */}
      {!videoReady && (
        <div className="absolute inset-0 bg-gray-100 opacity-10 animate-pulse z-10" />
      )}

      {/* ── Video (rendered as soon as mediaSrc exists) ── */}
      {project.mediaSrc && (
        <video
          ref={videoRef}
          src={project.mediaSrc}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          onCanPlay={() => setVideoReady(true)}
        />
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
const SPEED = 0.6; // px per frame — tweak to taste

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
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <section className="max-w-[1600px] px-2 py-5 mx-auto">
      <InfiniteTrack projects={projects} />
    </section>
  );
};

export default ProjectsSection;
