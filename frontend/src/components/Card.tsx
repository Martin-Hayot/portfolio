import type { ProjectsProps } from "data";

const ArrowUpRight = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
    </svg>
);

const GithubMark = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.34.85 0 1.7.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
    </svg>
);

const LockIcon = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2.4">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const Card = (project: ProjectsProps) => {
    const { num, title, kicker, description, highlights, status, statusColor, domain, image, live, repo, tech } = project;

    return (
        <div
            data-card-wrap
            className="flex items-start justify-center mb-6 md:sticky md:top-[6vh] md:h-[70vh] md:will-change-transform md:mb-0"
        >
            <article
                data-stack-card
                className="origin-top w-[min(94vw,1120px)] min-h-[500px] flex flex-col md:flex-row items-stretch rounded-[26px] overflow-hidden border border-white/[0.09]"
                style={{
                    background: "linear-gradient(150deg, #141417, #0e0e11)",
                    boxShadow: "0 40px 90px -30px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
            >
                {/* Info side */}
                <div className="w-full md:w-[43%] p-[28px_24px] md:p-[38px_40px] flex flex-col relative">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="text-[15px] font-semibold text-[#948cb0] tabular-nums tracking-[0.05em]">
                            {num}
                        </span>
                        <span className="flex-1" />
                        <span className="inline-flex items-center gap-[7px] px-[11px] py-[5px] rounded-full bg-white/5 border border-white/10 text-[11px] font-medium tracking-[0.06em] text-[#d4d4d8]">
                            <span
                                className="w-[7px] h-[7px] rounded-full"
                                style={{ background: statusColor, boxShadow: `0 0 8px ${statusColor}` }}
                            />
                            {status}
                        </span>
                    </div>

                    <h2 className="text-[34px] leading-[1.05] font-bold tracking-[-0.02em] mb-[7px]">
                        {title}
                    </h2>
                    <p className="text-sm font-medium text-violet-400 mb-[14px] tracking-[0.01em]">
                        {kicker}
                    </p>
                    <p className="text-[14.5px] leading-relaxed text-zinc-400 font-light mb-[18px]">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-[18px]">
                        {highlights.map((h) => (
                            <span
                                key={h}
                                className="px-[11px] py-[5px] rounded-lg bg-[rgba(124,58,237,0.10)] border border-violet-500/[0.22] text-[12px] text-[#c7bdf0]"
                            >
                                {h}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-center gap-[7px] mb-3">
                            <span className="text-[10px] font-semibold tracking-[0.18em] text-zinc-600">
                                BUILT WITH
                            </span>
                            <span className="flex-1 h-px bg-white/[0.07]" />
                        </div>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {tech.map((t) => (
                                <span
                                    key={t.name}
                                    title={t.name}
                                    className="inline-flex items-center gap-[7px] pl-2 pr-[10px] py-[6px] rounded-[9px] bg-white/[0.04] border border-white/[0.08] text-[12px] text-[#d4d4d8]"
                                >
                                    <img src={t.icon} alt={t.name} className="w-[15px] h-[15px] object-contain" />
                                    {t.name}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <a
                                href={live.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-[9px] py-[13px] px-[18px] rounded-xl bg-[#fafafa] text-[#18181b] text-sm font-semibold no-underline shadow-[0_8px_22px_-12px_rgba(0,0,0,0.7)] transition duration-[180ms] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_30px_-12px_rgba(0,0,0,0.85)]"
                            >
                                {live.label}
                                <ArrowUpRight />
                            </a>
                            <a
                                href={repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View source on GitHub"
                                className="inline-flex items-center justify-center gap-2 py-[13px] px-[18px] rounded-xl bg-white/5 border border-white/[0.12] text-[#e4e4e7] text-sm font-medium no-underline transition duration-[180ms] hover:bg-white/10 hover:border-white/[0.22]"
                            >
                                <GithubMark />
                                Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Media side */}
                <div className="group w-full md:w-[57%] relative flex items-stretch px-5 py-0 md:pt-[30px] md:pr-[30px] md:pb-0 md:pl-2 min-h-[280px] md:min-h-0">
                    <div className="relative flex-1 rounded-t-[14px] overflow-hidden border border-white/10 border-b-0 bg-[#1a1a1e] flex flex-col shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 px-[14px] py-[11px] bg-[rgba(20,20,24,0.96)] border-b border-white/[0.06] shrink-0">
                            <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
                            <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
                            <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
                            <div className="ml-[10px] flex-1 max-w-[280px] flex items-center gap-[7px] px-3 py-[5px] rounded-[7px] bg-white/5 border border-white/[0.06]">
                                <LockIcon />
                                <span className="text-[11px] text-[#8b8b93] tracking-[0.02em]">
                                    {domain}
                                </span>
                            </div>
                        </div>
                        {/* Screenshot */}
                        <div className="flex-1 overflow-hidden relative">
                            <img
                                src={image}
                                alt={`${title} screenshot`}
                                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[6000ms] ease-out md:group-hover:translate-y-[calc(-100%_+_360px)]"
                            />
                            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_-40px_60px_-30px_rgba(8,8,10,0.7)]" />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Card;
