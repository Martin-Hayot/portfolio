import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
    Cpu,
    Globe,
    Database,
    Cloud,
    Code2,
    Coffee,
    Music,
    Mountain,
    Gamepad2,
    Server,
    Layout,
    WandSparkles,
} from "lucide-react";

// Categorized Skills
const skillCategories = [
    {
        title: "Languages",
        icon: <Code2 className="w-5 h-5" />,
        skills: ["Go", "TypeScript", "JavaScript", "Python", "HTML & CSS"],
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20",
    },
    {
        title: "Frontend",
        icon: <Layout className="w-5 h-5" />,
        skills: ["React", "Next.js", "Tailwind CSS"],
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
    },
    {
        title: "Backend & Data",
        icon: <Database className="w-5 h-5" />,
        skills: [
            "Go",
            "Node.js",
            "Distributed Systems",
            "PostgreSQL",
            "CockroachDB",
            "SQL",
            "RESTful APIs",
        ],
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/20",
    },
    {
        title: "DevOps & Cloud",
        icon: <Cloud className="w-5 h-5" />,
        skills: ["Docker", "AWS", "Github Actions", "Ansible", "Terraform"],
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        border: "border-orange-400/20",
    },
];

const interests = [
    { name: "Open Source", icon: <Globe className="w-4 h-4" /> },
    { name: "System Design", icon: <Server className="w-4 h-4" /> },
    { name: "Game Dev", icon: <Gamepad2 className="w-4 h-4" /> },
    { name: "Piano", icon: <Music className="w-4 h-4" /> },
    { name: "Hiking", icon: <Mountain className="w-4 h-4" /> },
    { name: "Linux Ricing", icon: <WandSparkles className="w-4 h-4" /> },
];

// Commands typed out in the terminal, each followed by its output
const terminalScript = [
    {
        command: "whoami",
        output: (
            <>
                I'm a Master's student in{" "}
                <span className="text-orange-400">
                    Computer Systems Architecture
                </span>{" "}
                at Henallux and UNamur. Focusing on distributed systems,
                scalability, and robust software design.
            </>
        ),
    },
    {
        command: "cat passion.txt",
        output: (
            <>
                I bridge the gap between complex backend logic and clean user
                interfaces. While I can build fluid frontend experiences, my
                true passion lies in{" "}
                <span className="text-orange-400">backend engineering</span>,
                optimizing performance and architecting systems that last &
                scale.
            </>
        ),
    },
];

// ms per typed character, before an output appears, and between commands
const TYPE_SPEED = 55;
const OUTPUT_PAUSE = 300;
const NEXT_COMMAND_PAUSE = 700;

const Caret = () => (
    <span className="inline-block w-2 h-4 -mb-0.5 ml-0.5 bg-purple-400 animate-pulse" />
);

const TerminalScript = () => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const reduceMotion = useReducedMotion();

    // Characters typed per command, and how many outputs are shown
    const [typed, setTyped] = useState(() => terminalScript.map(() => 0));
    const [shown, setShown] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduceMotion) {
            setTyped(terminalScript.map((line) => line.command.length));
            setShown(terminalScript.length);
            return;
        }

        const timers: ReturnType<typeof setTimeout>[] = [];
        let at = 0;
        terminalScript.forEach(({ command }, line) => {
            for (let c = 1; c <= command.length; c++) {
                at += TYPE_SPEED;
                timers.push(
                    setTimeout(
                        () =>
                            setTyped((prev) =>
                                prev.map((n, i) => (i === line ? c : n)),
                            ),
                        at,
                    ),
                );
            }
            at += OUTPUT_PAUSE;
            timers.push(setTimeout(() => setShown(line + 1), at));
            at += NEXT_COMMAND_PAUSE;
        });
        return () => timers.forEach(clearTimeout);
    }, [inView, reduceMotion]);

    const done = shown === terminalScript.length;

    // Everything is rendered from the start (just invisible) so the
    // terminal keeps its final height and nothing below jumps
    return (
        <div ref={ref}>
            {terminalScript.map(({ command, output }, line) => (
                <div key={command} className={shown < line ? "invisible" : ""}>
                    <p className="mb-4">
                        <span className="text-purple-400 font-bold">
                            ${" "}
                            {command.slice(0, typed[line])}
                            {shown === line && <Caret />}
                            <span className="invisible">
                                {command.slice(typed[line])}
                            </span>
                        </span>
                    </p>
                    <motion.p
                        initial={false}
                        animate={
                            shown > line
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 6 }
                        }
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="text-gray-300 mb-6 border-l-2 border-white/10 pl-4"
                    >
                        {output}
                    </motion.p>
                </div>
            ))}

            <div
                className={cn(
                    "flex gap-2 items-center text-green-400 mt-8 animate-pulse",
                    !done && "invisible",
                )}
            >
                <span className="font-bold">{">"}</span>
                <span className="w-2 h-4 bg-green-400 block" />
            </div>
        </div>
    );
};

const TerminalWindow = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "rounded-lg border border-white/10 bg-[#0c0c0c] overflow-hidden shadow-2xl",
                className,
            )}
        >
            <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-auto text-xs text-white/30 font-mono">
                    bash martin@portfolio:~/about
                </div>
            </div>
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed text-gray-300">
                {children}
            </div>
        </div>
    );
};

const AboutSection = () => {
    return (
        <section className="pt-20 relative overflow-hidden">
            <div className="w-[80%] lg:max-w-7xl mx-auto space-y-16 relative z-10">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Profile Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-1/3 shrink-0"
                    >
                        <div className="relative group">
                            {/* Image Frame with Tech Accents */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-500" />
                            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#121212]">
                                <img
                                    src="/martin-black.jpg"
                                    alt="Martin Hayot"
                                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                {/* Overlay details */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6">
                                    <div className="flex items-center gap-2 text-cyan-400 mb-1 font-mono text-xs">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        Available for work
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Martin Hayot
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Computer System Architecture Student
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-sm text-gray-500 font-mono mb-1">
                                    LOCATION
                                </div>
                                <div className="text-base text-gray-200 flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-cyan-500" />{" "}
                                    Belgium
                                </div>
                            </div>
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-sm text-gray-500 font-mono mb-1">
                                    FOCUS
                                </div>
                                <div className="text-base text-gray-200">
                                    Systems Architecture
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1"
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                Software Architect <br />
                                <span className="text-2xl md:text-3xl font-light text-gray-400">
                                    & Full Stack Developer
                                </span>
                            </h2>
                        </div>

                        <TerminalWindow>
                            <TerminalScript />
                        </TerminalWindow>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Cpu className="w-6 h-6 text-purple-400" />
                        <h3 className="text-2xl font-bold text-white">
                            Technical Arsenal
                        </h3>
                        <div className="h-px bg-white/10 flex-1 ml-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((category, idx) => (
                            <div
                                key={category.title}
                                className={cn(
                                    "p-5 rounded-xl border transition-colors duration-300 hover:bg-opacity-20",
                                    "bg-white/5 backdrop-blur-sm border-white/5 hover:border-white/10",
                                )}
                            >
                                <div
                                    className={cn(
                                        "flex items-center gap-2 mb-4",
                                        category.color,
                                    )}
                                >
                                    {category.icon}
                                    <span className="font-bold">
                                        {category.title}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={cn(
                                                "text-xs px-2 py-1 rounded border font-mono transition-all hover:border-gray-200/50 cursor-default",
                                                category.color,
                                                category.bg,
                                                category.border,
                                            )}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Interests Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Coffee className="w-5 h-5 text-yellow-400" />
                        Interests & Pursuit
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {interests.map((interest, i) => (
                            <motion.div
                                key={interest.name}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 cursor-default"
                            >
                                <span className="text-white/60">
                                    {interest.icon}
                                </span>
                                <span className="text-sm">{interest.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
