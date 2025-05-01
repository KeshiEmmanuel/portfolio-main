export const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

export const showcasedProjects = [
    {
        projectId: 1,
        projectImage: "/learnease.png",
        projectTitle: "LearnEase - AI Powered lecture summarizer",
        projectDescription:
            "Upload lecture notes, research papers, or PDFs and get instant, AI-powered summaries and research insights.",
        completeStatus: false,
        githubLink: "https://github.com/KeshiEmmanuel/learnease-main",
        liveLink: "",
    },
    {
        projectId: 2,
        projectImage: "/zentryclone.png",
        projectTitle: "Zentry Clone - An awwward winning website",
        projectDescription:
            "A Modern Website with Captivating Animations That Transport Users Into an Epic Gaming Universe.",
        completeStatus: true,
        githubLink: "https://github.com/KeshiEmmanuel/react__Awward__website",
        liveLink: "https://react-awwward-clone.vercel.app/",
    },
    {
        projectId: 3,
        projectImage: "/gamediscovery.png",
        projectTitle: "GameDiscovery - Your get-to-go games explorer",
        projectDescription: "Explore and discover all games in one place!",
        completeStatus: true,
        githubLink: "https://github.com/KeshiEmmanuel/game_discovery_app",
        liveLink: "https://game-discovery-pi.vercel.app/",
    },
];

export type ProjectTypes = {
    projectId: number;
    projectImage: string;
    projectTitle: string;
    projectDescription: string;
    completeStatus: boolean;
    githubLink: string;
    liveLink: string;
};
