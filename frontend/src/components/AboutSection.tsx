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
    name: "Backend Development",
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
      <h2 className="text-4xl pb-8 text-white">Hey! I'm Martin Hayot</h2>
      <div className="flex items-center md:items-start gap-10 md:flex-row flex-col justify-between">
        <div className="text-white text-lg font-normal leading-relaxed pb-3 pt-1 max-w-4xl space-y-5">
          <p className="text-gray-300">
            I'm currently pursuing a{" "}
            <span className="text-white font-medium">
              Master's degree in Computer Systems Architecture
            </span>{" "}
            in Belgium at Henallux and UNamur. My studies focus on advanced
            system design, distributed architectures and the foundations needed
            to build reliable and scalable applications.
          </p>

          <p className="text-gray-300">
            I consider myself a{" "}
            <span className="text-white font-medium">versatile developer</span>.
            I enjoy working across the stack, especially when I can combine
            clean interfaces with solid technical foundations. Frontend
            development is something I like, but I naturally gravitate toward{" "}
            <span className="text-white font-medium">backend engineering</span>{" "}
            where I can design efficient systems, optimize performance and build
            software that scales.
          </p>

          <p className="text-gray-300">
            I'm passionate about creating{" "}
            <span className="text-white font-medium">
              well-structured architectures
            </span>
            , exploring new technologies and constantly improving the way I
            approach problem-solving.
          </p>
        </div>
        <img src="/martin-black.jpg" alt="" className="w-72 h-72 rounded-lg" />
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
