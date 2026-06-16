interface TechItem {
    name: string;
    icon: string;
}

export interface ProjectsProps {
    num: string;
    title: string;
    kicker: string;
    description: string;
    highlights: string[];
    status: string;
    statusColor: string;
    domain: string;
    image: string;
    live: { href: string; label: string };
    repo: string;
    tech: TechItem[];
}

export const projects: ProjectsProps[] = [
    {
        num: "01",
        title: "VaLe Garage",
        kicker: "B2C & B2B car auction & appointment platform",
        description:
            "A full-stack marketplace where buyers bid on cars in live auctions and book test-drive or purchase appointments — with authentication, saved favourites, and admin dashboards to manage users, cars and offers.",
        highlights: ["Live auctions", "Appointment booking", "Admin dashboard"],
        status: "Live",
        statusColor: "#28c840",
        domain: "vale-garage.com",
        image: "/vale-garage-homepage.png",
        live: {
            href: "https://vale-garage-martinhayots-projects.vercel.app/",
            label: "Visit live site",
        },
        repo: "https://github.com/Martin-Hayot/vale-garage",
        tech: [
            { name: "Next.js", icon: "/nextjs.svg" },
            { name: "TypeScript", icon: "/typescript.png" },
            { name: "Tailwind", icon: "/tailwindcss.svg" },
            { name: "PostgreSQL", icon: "/postgresql.svg" },
            { name: "Prisma", icon: "/prisma.svg" },
            { name: "shadcn/ui", icon: "/shadcnui.png" },
            { name: "Go", icon: "/go.svg" },
        ],
    },
    {
        num: "02",
        title: "Electric City",
        kicker: "Client & admin platform for a mastering studio",
        description:
            "Revamped a mastering studio's site with client and admin tools for orders, appointments and accounts — plus a custom booking calendar I built from scratch and automated email notifications for order updates.",
        highlights: [
            "Custom calendar",
            "Order management",
            "Email notifications",
        ],
        status: "2023",
        statusColor: "#8e87a6",
        domain: "electric-city.studio",
        image: "/electric-city-homepage.png",
        live: { href: "/calendar-preview", label: "See the calendar" },
        repo: "https://github.com/Martin-Hayot/Projet-Dev-3",
        tech: [
            { name: "Vue 3", icon: "/vue.svg" },
            { name: "Nuxt 3", icon: "/nuxt.svg" },
            { name: "Node / Express", icon: "/nodejs.svg" },
            { name: "Tailwind", icon: "/tailwindcss.svg" },
            { name: "PostgreSQL", icon: "/postgresql.svg" },
            { name: "Prisma", icon: "/prisma.svg" },
            { name: "Vuetify 3", icon: "/vuetify.svg" },
        ],
    },
];
