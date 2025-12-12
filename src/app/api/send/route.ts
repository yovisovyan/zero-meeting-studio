import { NextResponse } from "next/server";
import { Resend } from "resend";
import twilio from "twilio";

const resend = new Resend(process.env.RESEND_API_KEY);

// Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ---- Generate dynamic email HTML from all fields ----
    const html = `
      <h2>New Zero-Meeting Submission</h2>
      <p>You received a new project brief.</p>
      <hr/>
      <div style="font-size:14px;line-height:1.6;">
        ${Object.entries(body)
          .map(([key, value]) => {
            const label = key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (s) => s.toUpperCase());
            return `<p><strong>${label}:</strong> ${value || "-"}</p>`;
          })
          .join("")}
      </div>
      <hr/>
      <p style="opacity:0.6;font-size:12px;">
        Sent automatically by Zero-Meeting Studio.
      </p>
    `;

    // ---- Send EMAIL ----
    await resend.emails.send({
      from: "Zero-Meeting Studio <info@zeromeeting.site>",
      to: ["info@zeromeeting.site"],
      subject: "🔥 New Project Submission — Zero-Meeting Studio",
      html,
    });

    // ---- Send WhatsApp Notification ----
    await twilioClient.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM!, // your Twilio WhatsApp number
      to: process.env.TWILIO_WHATSAPP_TO!,     // your personal WhatsApp number
      body: `🔥 New Zero-Meeting submission!\n\nCheck your inbox → info@zeromeeting.site\n\nName: ${body.fullName}\nProject Type: ${body.projectType}`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notification error:", error);
    return NextResponse.json({ error: "Failed to send notifications" }, { status: 500 });
  }
}
