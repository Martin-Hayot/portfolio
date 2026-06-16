import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return new Response(
            JSON.stringify({ error: "All fields are required." }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" },
            },
        );
    }

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
        from: "Portfolio Contact <noreply@martinhayot.com>",
        to: "martin.hayot@gmail.com",
        replyTo: email,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
        return new Response(
            JSON.stringify({ error: "Failed to send message." }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            },
        );
    }

    return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
};
