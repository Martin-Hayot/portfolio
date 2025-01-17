interface TechStack {
    name: string;
    icon: string;
    href: string;
}

export interface ProjectsProps {
    title: string;
    body: string;
    description: string;
    href: string;
    techStack: TechStack[];
    projectImg: string;
    linkToPreview?: string;
    linkMessage?: string;
    color: string;
}

export const projects: ProjectsProps[] = [
    {
        title: "VaLe Garage",
        body: "A B2C and B2B auction and appointment taking platform for cars.",
        description:
            "A full-stack web application that allows users to buy and sell cars through auctions. It also allows users to book appointments to buy or test the vehicules.",
        href: "https://gitlab.com/Martin-Hayot/vale-garage",
        projectImg: "/vale-garage-homepage.png",
        linkToPreview: "https://vale-garage.com",
        linkMessage: "Check out the live site",
        color: "#575A5E",
        techStack: [
            {
                name: "Next.js",
                icon: "/nextjs.svg",
                href: "https://nextjs.org",
            },
            {
                name: "TypeScript",
                icon: "/typescript.png",
                href: "https://www.typescriptlang.org",
            },
            {
                name: "Tailwindcss",
                icon: "/tailwindcss.svg",
                href: "https://tailwindcss.com",
            },
            {
                name: "PostgreSQL",
                icon: "/postgresql.svg",
                href: "https://www.postgresql.org",
            },
            {
                name: "Prisma ORM",
                icon: "/prisma.svg",
                href: "https://www.prisma.io",
            },
            {
                name: "ShadcnUI",
                icon: "/shadcnui.png",
                href: "https://ui.shadcn.com",
            },
        ],
    },
    {
        href: "https://github.com/Martin-Hayot/Projet-Dev-3",
        title: "Electric city",
        body: "Revamping Electric City's website for better visibility and client interaction. ",
        description:
            "Adding client and admin interfaces for streamlined orders, appointments, and account management. Unique feature: direct online interaction, setting it apart from competitors. Email notifications for order updates.",
        projectImg: "/electric-city-homepage.png",
        linkToPreview: "/calendar-preview",
        linkMessage: "The calendar I built for this project",
        color: "#A7A2A9",
        techStack: [
            {
                name: "Vue3",
                icon: "/vue.svg",
                href: "https://vuejs.org",
            },
            {
                name: "Nuxt3",
                icon: "/nuxt.svg",
                href: "https://nuxt.com",
            },
            {
                name: "NodeJS/Express",
                icon: "/nodejs.svg",
                href: "https://expressjs.com",
            },
            {
                name: "Tailwindcss",
                icon: "/tailwindcss.svg",
                href: "https://tailwindcss.com",
            },
            {
                name: "PostgreSQL",
                icon: "/postgresql.svg",
                href: "https://www.postgresql.org",
            },
            {
                name: "Prisma ORM",
                icon: "/prisma.svg",
                href: "https://www.prisma.io",
            },
            {
                name: "Vuetify3",
                icon: "/vuetify.svg",
                href: "https://vuetifyjs.com/en/",
            },
        ],
    },
    {
        href: "https://github.com/Martin-Hayot/Projet-Dev-3",
        title: "Electric city",
        body: "Revamping Electric City's website for better visibility and client interaction. ",
        description:
            "Adding client and admin interfaces for streamlined orders, appointments, and account management. Unique feature: direct online interaction, setting it apart from competitors. Email notifications for order updates.",
        projectImg: "/electric-city-homepage.png",
        linkToPreview: "/calendar-preview",
        linkMessage: "The calendar I built for this project",
        color: "#CED4DA",
        techStack: [
            {
                name: "Vue3",
                icon: "/vue.svg",
                href: "https://vuejs.org",
            },
            {
                name: "Nuxt3",
                icon: "/nuxt.svg",
                href: "https://nuxt.com",
            },
            {
                name: "NodeJS/Express",
                icon: "/nodejs.svg",
                href: "https://expressjs.com",
            },
            {
                name: "Tailwindcss",
                icon: "/tailwindcss.svg",
                href: "https://tailwindcss.com",
            },
            {
                name: "PostgreSQL",
                icon: "/postgresql.svg",
                href: "https://www.postgresql.org",
            },
            {
                name: "Prisma ORM",
                icon: "/prisma.svg",
                href: "https://www.prisma.io",
            },
            {
                name: "Vuetify3",
                icon: "/vuetify.svg",
                href: "https://vuetifyjs.com/en/",
            },
        ],
    },
];
