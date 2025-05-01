import { ProjectTypes } from "../constants";
import { FaGithub, FaLink } from "react-icons/fa6";
import { IoMdBuild } from "react-icons/io";

import { Badge } from "./ui/badge";
interface Props {
    project: ProjectTypes;
}
export default function ProjectCard({ project }: Props) {
    return (
        <article
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
                    <Badge className="bg-orange-200 animate-pulse">
                        <IoMdBuild />
                        Still in Progress
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
