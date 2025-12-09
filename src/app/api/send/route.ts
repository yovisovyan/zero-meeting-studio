// src/app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_KEY = process.env.RESEND_API_KEY || "";

const resend = RESEND_KEY ? new Resend(RESEND_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const html = `
      <h2>New Zero-Meeting submission</h2>
      <p><strong>Name:</strong> ${body.name || "—"}</p>
      <p><strong>Email:</strong> ${body.email || "—"}</p>
      <p><strong>Service:</strong> ${body.service || "—"}</p>
      <p><strong>Website:</strong> ${body.websiteUrl || "—"}</p>
      <p><strong>Budget:</strong> ${body.budget || "—"}</p>
      <h3>Message</h3>
      <p>${(body.message || "—").replace(/\n/g, "<br/>")}</p>
    `;

    if (resend) {
      await resend.emails.send({
        from: "Zero-Meeting <noreply@yourdomain.com>",
        to: ["yovisovyan@gmail.com"], // <-- change to your email
        subject: `New project: ${body.service || "Submission"}`,
        html,
      });
    } else {
      // fallback during local dev / if RESEND not configured
      console.log("Email content (RESEND not configured):", html);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
