import { BookOpen, FolderGit2, ArrowUpRight, Terminal } from "lucide-react";

// lucide-react v1 removed brand icons (Github, Linkedin, ...) for trademark
// reasons, so the logos are provided here as inline SVGs.
type BrandIconProps = { className?: string };

const Github = ({ className }: BrandIconProps) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const Linkedin = ({ className }: BrandIconProps) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
);

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
            className="w-[80%] lg:max-w-7xl mx-auto mt-40 mb-32 relative"
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

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
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
