import type { ProjectsProps } from "data";

const ArrowUpRight = () => (
    <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
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
    <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#52525b"
        strokeWidth="2.4"
    >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const Card = (project: ProjectsProps) => {
    const {
        num,
        title,
        kicker,
        description,
        highlights,
        status,
        statusColor,
        domain,
        image,
        live,
        repo,
        tech,
    } = project;

    return (
        <div
            data-card-wrap
            style={{
                height: "70vh",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                position: "sticky",
                top: "6vh",
                willChange: "transform",
            }}
        >
            <article
                data-stack-card
                className="psc-card"
                style={{
                    transformOrigin: "top center",
                    width: "min(94vw, 1120px)",
                    minHeight: "500px",
                    display: "flex",
                    alignItems: "stretch",
                    borderRadius: "26px",
                    overflow: "hidden",
                    background: "linear-gradient(150deg, #141417, #0e0e11)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow:
                        "0 40px 90px -30px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
            >
                {/* info side */}
                <div
                    className="psc-info"
                    style={{
                        width: "43%",
                        padding: "38px 40px",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "20px",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "15px",
                                fontWeight: 600,
                                color: "#948cb0",
                                fontVariantNumeric: "tabular-nums",
                                letterSpacing: "0.05em",
                            }}
                        >
                            {num}
                        </span>
                        <span style={{ flex: 1 }} />
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "7px",
                                padding: "5px 11px",
                                borderRadius: "999px",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.10)",
                                fontSize: "11px",
                                fontWeight: 500,
                                letterSpacing: "0.06em",
                                color: "#d4d4d8",
                            }}
                        >
                            <span
                                style={{
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",
                                    background: statusColor,
                                    boxShadow: `0 0 8px ${statusColor}`,
                                }}
                            />
                            {status}
                        </span>
                    </div>

                    <h2
                        style={{
                            fontSize: "34px",
                            lineHeight: 1.05,
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            marginBottom: "7px",
                        }}
                    >
                        {title}
                    </h2>
                    <p
                        style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#a78bfa",
                            marginBottom: "14px",
                            letterSpacing: "0.01em",
                        }}
                    >
                        {kicker}
                    </p>
                    <p
                        style={{
                            fontSize: "14.5px",
                            lineHeight: 1.6,
                            color: "#a1a1aa",
                            fontWeight: 300,
                            marginBottom: "18px",
                        }}
                    >
                        {description}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                            marginBottom: "18px",
                        }}
                    >
                        {highlights.map((h) => (
                            <span
                                key={h}
                                style={{
                                    padding: "5px 11px",
                                    borderRadius: "8px",
                                    background: "rgba(124,58,237,0.10)",
                                    border: "1px solid rgba(139,92,246,0.22)",
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    color: "#c7bdf0",
                                }}
                            >
                                {h}
                            </span>
                        ))}
                    </div>

                    <div style={{ marginTop: "auto" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "7px",
                                marginBottom: "12px",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    letterSpacing: "0.18em",
                                    color: "#52525b",
                                }}
                            >
                                BUILT WITH
                            </span>
                            <span
                                style={{
                                    flex: 1,
                                    height: "1px",
                                    background: "rgba(255,255,255,0.07)",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "8px",
                                marginBottom: "20px",
                            }}
                        >
                            {tech.map((t) => (
                                <span
                                    key={t.name}
                                    title={t.name}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "7px",
                                        padding: "6px 10px 6px 8px",
                                        borderRadius: "9px",
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        fontSize: "12px",
                                        fontWeight: 400,
                                        color: "#d4d4d8",
                                    }}
                                >
                                    <img
                                        src={t.icon}
                                        alt={t.name}
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            objectFit: "contain",
                                        }}
                                    />
                                    {t.name}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: "flex", gap: "12px" }}>
                            <a
                                href={live.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="psc-cta-primary"
                                style={{
                                    flex: 1,
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "9px",
                                    padding: "13px 18px",
                                    borderRadius: "12px",
                                    background: "#fafafa",
                                    color: "#18181b",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    boxShadow: "0 8px 22px -12px rgba(0,0,0,0.7)",
                                }}
                            >
                                {live.label}
                                <ArrowUpRight />
                            </a>
                            <a
                                href={repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View source on GitHub"
                                className="psc-cta-ghost"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    padding: "13px 18px",
                                    borderRadius: "12px",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    color: "#e4e4e7",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    textDecoration: "none",
                                }}
                            >
                                <GithubMark />
                                Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* image side: browser-framed product shot */}
                <div
                    className="psc-media"
                    style={{
                        width: "57%",
                        position: "relative",
                        padding: "30px 30px 0 8px",
                        display: "flex",
                        alignItems: "stretch",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            flex: 1,
                            borderRadius: "14px 14px 0 0",
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.10)",
                            borderBottom: "none",
                            background: "#1a1a1e",
                            boxShadow: "0 30px 60px -30px rgba(0,0,0,0.9)",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "11px 14px",
                                background: "rgba(20,20,24,0.96)",
                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                                flexShrink: 0,
                            }}
                        >
                            <span
                                style={{
                                    width: "11px",
                                    height: "11px",
                                    borderRadius: "50%",
                                    background: "#ff5f57",
                                }}
                            />
                            <span
                                style={{
                                    width: "11px",
                                    height: "11px",
                                    borderRadius: "50%",
                                    background: "#febc2e",
                                }}
                            />
                            <span
                                style={{
                                    width: "11px",
                                    height: "11px",
                                    borderRadius: "50%",
                                    background: "#28c840",
                                }}
                            />
                            <div
                                style={{
                                    marginLeft: "10px",
                                    flex: 1,
                                    maxWidth: "280px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "7px",
                                    padding: "5px 12px",
                                    borderRadius: "7px",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                }}
                            >
                                <LockIcon />
                                <span
                                    style={{
                                        fontSize: "11px",
                                        color: "#8b8b93",
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    {domain}
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                flex: 1,
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            <img
                                src={image}
                                alt={`${title} screenshot`}
                                className="psc-shot"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "top center",
                                    transition: "transform 6s ease-out",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    pointerEvents: "none",
                                    boxShadow:
                                        "inset 0 -40px 60px -30px rgba(8,8,10,0.7)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Card;
