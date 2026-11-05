type ContactMessage = {
    name: string;
    email: string;
    message: string;
};

const ACCENT = "#7c3aed";

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

// Email clients ignore <style> blocks unevenly, so everything is inlined and laid
// out with tables
export const renderContactEmail = ({ name, email, message }: ContactMessage) => {
    const subject = `New message from ${name}`;
    const sentAt = new Date().toLocaleString("en-GB", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Europe/Paris",
    });
    const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
        "Re: your message on martinhayot.com",
    )}`;
    // Shown by most inboxes next to the subject
    const preview = message.replace(/\s+/g, " ").slice(0, 120);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light only" />
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preview)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;">
<tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4e4e7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
        <tr><td style="height:4px;background:${ACCENT};font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td style="padding:32px 32px 8px;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.16em;color:${ACCENT};">PORTFOLIO CONTACT FORM</p>
            <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:700;color:#18181b;">${safeName} sent you a message</h1>
            <p style="margin:8px 0 0;font-size:13px;color:#71717a;">${sentAt} (Paris)</p>
        </td></tr>
        <tr><td style="padding:24px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border:1px solid #f4f4f5;border-radius:12px;">
                <tr>
                    <td style="padding:14px 16px 6px;font-size:12px;color:#71717a;width:64px;vertical-align:top;">Name</td>
                    <td style="padding:14px 16px 6px;font-size:14px;color:#18181b;font-weight:600;">${safeName}</td>
                </tr>
                <tr>
                    <td style="padding:6px 16px 14px;font-size:12px;color:#71717a;vertical-align:top;">Email</td>
                    <td style="padding:6px 16px 14px;font-size:14px;"><a href="mailto:${safeEmail}" style="color:${ACCENT};text-decoration:none;">${safeEmail}</a></td>
                </tr>
            </table>
        </td></tr>
        <tr><td style="padding:24px 32px 0;">
            <p style="margin:0 0 10px;font-size:12px;font-weight:600;letter-spacing:0.08em;color:#71717a;">MESSAGE</p>
            <div style="border-left:3px solid ${ACCENT};padding:4px 0 4px 16px;font-size:15px;line-height:1.65;color:#27272a;word-break:break-word;">${safeMessage}</div>
        </td></tr>
        <tr><td style="padding:28px 32px 32px;">
            <a href="${replyHref}" style="display:inline-block;background:#18181b;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 22px;border-radius:10px;">Reply to ${safeName}</a>
            <p style="margin:12px 0 0;font-size:12px;color:#a1a1aa;">Or just hit reply: it goes straight to ${safeEmail}.</p>
        </td></tr>
    </table>
    <p style="margin:16px 0 0;font-size:12px;color:#a1a1aa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">Sent from the contact form on martinhayot.com</p>
</td></tr>
</table>
</body>
</html>`;

    const text = [
        `New message from the portfolio contact form`,
        `${sentAt} (Paris)`,
        ``,
        `Name:  ${name}`,
        `Email: ${email}`,
        ``,
        `Message`,
        `-------`,
        message,
        ``,
        `Hit reply to answer ${name} directly.`,
    ].join("\n");

    return { subject, html, text };
};
