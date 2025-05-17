import { ProjectTypes } from "../constants";
import { FaGithub, FaLink, FaShip } from "react-icons/fa6";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Badge } from "./ui/badge";

interface Props {
    project: ProjectTypes;
}
gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project }: Props) {
    const ProjectCardsRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            ProjectCardsRef.current,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                scrollTrigger: {
                    trigger: ProjectCardsRef.current,
                    start: "top 80%", // when h1 reaches 80% from the top of the viewport
                    toggleActions: "play reverse play reverse",
                },
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                delay: 0.3 * project.projectId,
                ease: "power1.inOut",
            }
        );
    });
    return (
        <article
            ref={ProjectCardsRef}
            className={`card card-${project.projectId} cursor-pointer py-10 xl:py-0`}
        >
            <img
                src={project.projectImage}
                alt={project.projectTitle}
                className="w-full"
            />

            <h1 className="secondary-font font-bold my-2 flex items-center gap-2 py-2 xl:py-0">
                {project.projectTitle}
                {!project.completeStatus && (
                    <Badge className="bg-green-500 animate-pulse">
                        <FaShip />
                        Shipped
                    </Badge>
                )}
            </h1>
            <p className="text-gray-300 my-2">
                {project.projectId === 1 && project.projectDescription}
            </p>
            <div className="flex gap-2 text-gray-500">
                <a
                    href={project.githubLink}
                    target="_blank"
                    className="hover:text-gray-100"
                >
                    <FaGithub />
                </a>
                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        className="hover:text-gray-100"
                    >
                        <FaLink />
                    </a>
                )}
            </div>
        </article>
    );
}
