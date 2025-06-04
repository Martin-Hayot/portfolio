const skills = [
    {
        name: "Go",
    },
    {
        name: "JavaScript",
    },
    {
        name: "TypeScript",
    },
    {
        name: "RESTful APIs",
    },
    {
        name: "Python",
    },
    {
        name: "React",
    },
    {
        name: "Node.js",
    },
    {
        name: "Next.js",
    },

    {
        name: "Tailwind CSS",
    },
    {
        name: "SQL",
    },
    {
        name: "PostgreSQL",
    },

    {
        name: "Docker",
    },

    {
        name: "AWS",
    },
    {
        name: "HTML & CSS",
    },
];

const interests = [
    {
        name: "Open Source",
    },
    {
        name: "New Technologies",
    },
    {
        name: "Web Development",
    },
    {
        name: "Game Development",
    },
    {
        name: "DevOps",
    },
    {
        name: "Piano",
    },
    {
        name: "Hiking",
    },
];

const AboutSection = () => {
    return (
        <div className="mx-auto w-[80%] lg:max-w-7xl">
            <h2 className="text-4xl pb-8 text-white">About Me</h2>
            <div className="flex items-center md:items-start gap-10 md:flex-row flex-col justify-between">
                <p className="text-white text-lg font-normal leading-normal pb-3 pt-1 max-w-4xl">
                    Hi, I'm Martin — a passionate developer who loves turning
                    complex problems into clean, efficient code. I'm a
                    bachelor's degree graduate from EPHEC, but I'm also a
                    self-taught tech enthusiast with a strong focus on backend
                    development, always eager to explore new technologies and
                    improve my craft.
                    <br /> <br />
                    💡 What drives me:{" "}
                    <ul className="list-disc pl-10">
                        <li>Designing and building scalable APIs</li>
                        <li>
                            Solving real-world problems through thoughtful
                            engineering
                        </li>
                        <li>
                            Continuously learning and pushing the boundaries of
                            what I can achieve
                        </li>
                    </ul>
                    <br />
                    Lately, I've been diving deep into Go, sharpening my skills
                    to build high-performance, reliable backend services.
                </p>
                <img
                    src="/astro_on_computer.jpg"
                    alt=""
                    className="w-72 h-72 rounded-lg"
                />
            </div>
            <div className="mt-10">
                <h3 className="text-2xl pb-5 text-white">Skills</h3>
                <ul className="list-none flex gap-3 max-w-4xl flex-row flex-wrap text-white">
                    {skills.map((skill) => (
                        <li
                            key={skill.name}
                            className="flex bg-[#3f2348] px-4 py-1 rounded-md items-center gap-2"
                        >
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-10">
                <h3 className="text-2xl pb-5 text-white">Interests</h3>
                <ul className="list-none flex gap-3 max-w-4xl flex-row flex-wrap text-white">
                    {interests.map((interest) => (
                        <li
                            key={interest.name}
                            className="flex bg-[#3f2348] px-4 py-1 rounded-md items-center gap-2"
                        >
                            <span>{interest.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutSection;
