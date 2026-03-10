import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().trim().min(1).max(120),
    email: z.string().trim().email().max(320),
    message: z.string().trim().min(1).max(5000),
});

const RESEND_API_URL = "https://api.resend.com/emails";
const CONTACT_RECIPIENT = "jameshoang2304@gmail.com";

export async function POST(request: Request) {
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail =
        process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!resendApiKey) {
        return NextResponse.json(
            {
                message:
                    "Contact form is not configured yet. Missing RESEND_API_KEY.",
            },
            { status: 500 },
        );
    }

    let parsedBody: z.infer<typeof contactSchema>;
    try {
        const body = (await request.json()) as unknown;
        parsedBody = contactSchema.parse(body);
    } catch {
        return NextResponse.json(
            {
                message: "Please provide a valid name, email, and message.",
            },
            { status: 400 },
        );
    }

    const emailPayload = {
        from: fromEmail,
        to: [CONTACT_RECIPIENT],
        subject: `Portfolio message from ${parsedBody.name}`,
        reply_to: parsedBody.email,
        text: `Name: ${parsedBody.name}\nEmail: ${parsedBody.email}\n\nMessage:\n${parsedBody.message}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(parsedBody.name)}</p><p><strong>Email:</strong> ${escapeHtml(parsedBody.email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(parsedBody.message).replaceAll("\n", "<br/>")}</p>`,
    };

    try {
        const resendResponse = await fetch(RESEND_API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${resendApiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(emailPayload),
        });

        if (!resendResponse.ok) {
            const errorData = (await resendResponse.json()) as {
                message?: string;
            };

            return NextResponse.json(
                {
                    message:
                        errorData.message ||
                        "Email service rejected the request.",
                },
                { status: 502 },
            );
        }

        return NextResponse.json({
            message: "Thanks, your message has been sent.",
        });
    } catch {
        return NextResponse.json(
            { message: "Failed to reach the email service." },
            { status: 502 },
        );
    }
}

function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
