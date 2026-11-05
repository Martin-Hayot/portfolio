import type { APIRoute } from "astro";
import { Resend } from "resend";
import { renderContactEmail } from "../../lib/contactEmail";

export const prerender = false;

const json = (body: unknown, status: number) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json" },
    });

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { name, email, message, website } = body ?? {};

        // Honeypot: bots fill this, humans don't
        if (website) {
            return json({ success: true }, 200);
        }

        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return json({ error: "All fields are required." }, 400);
        }

        // In dev without a key, skip the email so the form flow can still be tested
        if (import.meta.env.DEV && !import.meta.env.RESEND_API_KEY) {
            console.info("[contact] RESEND_API_KEY not set, email skipped:", { name, email, message });
            return json({ success: true }, 200);
        }

        const resend = new Resend(import.meta.env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: "Portfolio Contact <noreply@martinhayot.com>",
            to: "martin.hayot@gmail.com",
            replyTo: email,
            ...renderContactEmail({
                name: name.trim(),
                email: email.trim(),
                message: message.trim(),
            }),
        });

        if (error) {
            console.error("[contact] Resend error:", error);
            return json({ error: "Failed to send message." }, 500);
        }

        return json({ success: true }, 200);
    } catch (err) {
        console.error("[contact] Unexpected error:", err);
        return json({ error: "Failed to send message." }, 500);
    }
};
