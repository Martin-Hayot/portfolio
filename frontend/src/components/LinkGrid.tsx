import {
    Github,
    Linkedin,
    BookOpen,
    FolderGit2,
    ArrowUpRight,
    Terminal,
} from "lucide-react";

const items = [
    {
        title: "Projects",
        subtitle: "View my work",
        icon: <FolderGit2 className="w-6 h-6" />,
        href: "/#projects",
        color: "text-blue-400",
        hoverBorder: "hover:border-blue-500/40",
        iconBg: "bg-blue-500/10",
    },
    {
        title: "GitHub",
        subtitle: "Check the code",
        icon: <Github className="w-6 h-6" />,
        href: "https://github.com/Martin-Hayot",
        isExternal: true,
        color: "text-neutral-200",
        hoverBorder: "hover:border-neutral-500/40",
        iconBg: "bg-neutral-500/10",
    },
    {
        title: "Blog",
        subtitle: "Read my articles",
        icon: <BookOpen className="w-6 h-6" />,
        href: "/blog",
        color: "text-purple-400",
        hoverBorder: "hover:border-purple-500/40",
        iconBg: "bg-purple-500/10",
    },
    {
        title: "LinkedIn",
        subtitle: "Connect with me",
        icon: <Linkedin className="w-6 h-6" />,
        href: "https://www.linkedin.com/in/martin-hayot-21988723b/",
        isExternal: true,
        color: "text-blue-500",
        hoverBorder: "hover:border-blue-600/40",
        iconBg: "bg-blue-600/10",
    },
];

const LinkGrid = () => {
    return (
        <section
            className="w-[80%] lg:max-w-7xl mx-auto mt-40 mb-60 relative"
            id="Cards"
        >
            <div className="-z-10 absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex items-center gap-3 mb-10">
                <Terminal className="w-6 h-6 text-green-400" />
                <h2 className="text-3xl font-bold text-white">
                    Navigation Hub
                </h2>
                <div className="h-px bg-white/10 flex-1 ml-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item) => (
                    <a
                        key={item.title}
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={
                            item.isExternal ? "noopener noreferrer" : undefined
                        }
                        className={`group relative block rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 md:p-8 transition-all duration-300 hover:bg-neutral-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${item.hoverBorder}`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-5">
                                <div
                                    className={`p-3.5 rounded-xl ${item.iconBg} ${item.color}`}
                                >
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-white transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors mt-0.5">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>

                            <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default LinkGrid;
