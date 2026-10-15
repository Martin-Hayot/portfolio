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
    live?: { href: string; label: string };
    repo?: string;
    tech: TechItem[];
}

export const projects: ProjectsProps[] = [
    {
        num: "01",
        title: "Caroline Delooz",
        kicker: "Website for a sophrologist, coach & yoga teacher",
        description:
            "The public website of a wellness practice in Walloon Brabant, presenting her approach, consultations and blog, with a calm, warm visual identity that the Haoma patient app extends seamlessly.",
        highlights: ["Brand identity", "Blog", "Appointment CTA"],
        status: "Live",
        statusColor: "#28c840",
        domain: "carolinedelooz.com",
        image: "/carolinedelooz-homepage.png",
        live: {
            href: "https://carolinedelooz.com/",
            label: "Visit live site",
        },
        tech: [{ name: "WordPress", icon: "/wordpress.svg" }],
    },
    {
        num: "02",
        title: "Haoma",
        kicker: "Patient follow-up platform for a sophrology practice",
        description:
            "A private web app where a therapist manages patients between sessions: invitation-based onboarding, online booking synced with Google Calendar, configurable availability, and a video exercise library assigned to each patient.",
        highlights: [
            "Google Calendar sync",
            "Online booking",
            "Video exercise library",
            "Patient invitations",
        ],
        status: "Live",
        statusColor: "#28c840",
        domain: "app.carolinedelooz.com",
        image: "/haoma-booking.png",
        live: {
            href: "https://app.carolinedelooz.com/",
            label: "Visit live app",
        },
        tech: [
            { name: "Next.js", icon: "/nextjs.svg" },
            { name: "TypeScript", icon: "/typescript.png" },
            { name: "Tailwind", icon: "/tailwindcss.svg" },
            { name: "PostgreSQL", icon: "/postgresql.svg" },
            { name: "Prisma", icon: "/prisma.svg" },
            { name: "shadcn/ui", icon: "/shadcnui.png" },
            { name: "Docker", icon: "/docker.svg" },
        ],
    },
    {
        num: "03",
        title: "Docguard",
        kicker: "End-to-end encrypted medical records platform",
        description:
            "A secure web app where patients and doctors store and share medical files without ever trusting the server. Every file is encrypted in the browser before upload, logins are passwordless with passkeys, doctors get X.509 certificates from a custom PKI, and every action lands in a tamper-proof audit log.",
        highlights: [
            "Client-side E2E encryption",
            "Passkey login",
            "3-tier PKI",
            "Tamper-proof audit log",
        ],
        status: "2026",
        statusColor: "#8e87a6",
        domain: "docguard",
        image: "/docguard-login.png",
        tech: [
            { name: "React", icon: "/react.svg" },
            { name: "TypeScript", icon: "/typescript.png" },
            { name: "Node / Express", icon: "/nodejs.svg" },
            { name: "PostgreSQL", icon: "/postgresql.svg" },
            { name: "Prisma", icon: "/prisma.svg" },
            { name: "Docker", icon: "/docker.svg" },
        ],
    },
    {
        num: "04",
        title: "DataHive",
        kicker: "Fault-tolerant distributed file system",
        description:
            "A Dropbox-like file storage system spread across several machines. Every file is replicated on at least two nodes so nothing is lost when one goes down. Nodes discover each other automatically and sync over gRPC, with a web client and a desktop client.",
        highlights: [
            "Replication across nodes",
            "Auto peer discovery",
            "Web & desktop clients",
        ],
        status: "2025",
        statusColor: "#8e87a6",
        domain: "datahive",
        image: "/datahive-dashboard.png",
        tech: [
            { name: "Python", icon: "/python.svg" },
            { name: "FastAPI", icon: "/fastapi.svg" },
            { name: "gRPC", icon: "/grpc.svg" },
            { name: "CockroachDB", icon: "/cockroachdb.svg" },
            { name: "React", icon: "/react.svg" },
            { name: "TypeScript", icon: "/typescript.png" },
            { name: "Docker", icon: "/docker.svg" },
        ],
    },
    {
        num: "05",
        title: "VaLe Garage",
        kicker: "B2C & B2B car auction & appointment platform",
        description:
            "A full-stack marketplace where buyers bid on cars in live auctions and book test-drive or purchase appointments, with authentication, saved favourites, and admin dashboards to manage users, cars and offers.",
        highlights: ["Live auctions", "Appointment booking", "Admin dashboard"],
        status: "2024",
        statusColor: "#8e87a6",
        domain: "vale-garage.com",
        image: "/vale-garage-homepage.png",
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
        num: "06",
        title: "Electric City",
        kicker: "Client & admin platform for a mastering studio",
        description:
            "Revamped a mastering studio's site with client and admin tools for orders, appointments and accounts, plus a custom booking calendar I built from scratch and automated email notifications for order updates.",
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
