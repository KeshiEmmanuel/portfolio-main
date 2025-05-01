import ProjectCard from "../components/ProjectCard";
import { showcasedProjects } from "../constants";

const Projects = () => {
    return (
        <section id="work">
            <div className="section-padding primary-font">
                <p className="py-2 rounded-full mb-5 bg-gray-700/40 text-gray-300 backdrop-blur-lg w-[8rem] flex justify-center">
                    My works ⚡
                </p>
                <div className="grid showcaselayout">
                    {showcasedProjects.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
