// TEMPORARY: dev-only preview of the contact email template. Delete once the
// design is settled.
import type { APIRoute } from "astro";
import { renderContactEmail } from "../lib/contactEmail";

export const prerender = false;

export const GET: APIRoute = () => {
    if (!import.meta.env.DEV) return new Response(null, { status: 404 });

    const { html } = renderContactEmail({
        name: "Jane Doe",
        email: "jane@example.com",
        message:
            "Hi Martin,\n\nI saw your portfolio and I'd love to chat about a freelance project: a small React dashboard for our team.\n\nAre you available next week?\n\nCheers,\nJane",
    });

    return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
    });
};
