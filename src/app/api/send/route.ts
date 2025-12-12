import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Auto-format all fields into HTML
    const html = `
      <h2>New Zero-Meeting Onboarding Submission</h2>
      <p>You received a new project brief from the /start form.</p>
      <hr />
      <div style="font-size:14px; line-height:1.6;">
        ${Object.entries(body)
          .map(([key, value]) => {
            const label = key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (s) => s.toUpperCase());
            return `<p><strong>${label}:</strong> ${value || "-"}</p>`;
          })
          .join("")}
      </div>
      <hr />
      <p style="opacity:0.6;font-size:12px;">Sent automatically by Zero-Meeting Studio · zeromeeting.site</p>
    `;

    await resend.emails.send({
      from: "Zero-Meeting Studio <info@zeromeeting.site>",
      to: ["info@zeromeeting.site"],
      subject: "🔥 New Project Submission — Zero-Meeting Studio",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
