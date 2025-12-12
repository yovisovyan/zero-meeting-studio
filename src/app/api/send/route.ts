import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "Zero-Meeting Studio <info@zeromeeting.site>",
      to: ["info@zeromeeting.site"],
      subject: "New Project Submission — Zero-Meeting Studio",
      html: `
        <h2>New Project Submitted</h2>
        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Website:</strong> ${body.website}</p>
        <p><strong>Project Type:</strong> ${body.projectType}</p>
        <p><strong>Budget:</strong> ${body.budget}</p>
        <p><strong>Timeline:</strong> ${body.timeline}</p>
        <p><strong>Main Goal:</strong> ${body.goals}</p>
        <p><strong>Audience:</strong> ${body.audience}</p>
        <p><strong>Style:</strong> ${body.style}</p>
        <p><strong>References:</strong> ${body.referenceLinks}</p>
        <p><strong>Copy Ready:</strong> ${body.copyReady}</p>
        <p><strong>Need Copywriting:</strong> ${body.needCopywriting}</p>
        <p><strong>Async Tools:</strong> ${body.asyncTools}</p>
        <p><strong>Risks:</strong> ${body.biggestRisk}</p>
        <p><strong>Notes:</strong> ${body.anythingElse}</p>
        <p><strong>Heard From:</strong> ${body.heardFrom}</p>

        <br/><hr/>
        <p style="opacity:0.6">Sent automatically from ZeroMeeting Studio onboarding.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
