import { Resend } from "resend";
import { NextRequest } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHtmlMultiline(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br/>");
}

function contactEmailHtml({
  name,
  email,
  company,
  subject,
  message,
}: {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e8eaed;">
        <p style="margin:0 0 4px;font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:#80868b;">${label}</p>
        <p style="margin:0;font-size:14px;color:#202124;">${escapeHtmlMultiline(value)}</p>
      </td>
    </tr>`;

  return `
  <div style="background:#f8f9fa;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e8eaed;">
      <tr>
        <td style="padding:28px 32px;text-align:center;border-bottom:1px solid #e8eaed;">
          <img src="${siteUrl}/logo/wordmark.png" alt="Archomak" height="28" style="height:28px;width:auto;" />
        </td>
      </tr>
      <tr>
        <td style="padding:24px 32px 8px;">
          <p style="margin:0 0 4px;font-size:12px;font-weight:bold;letter-spacing:.05em;text-transform:uppercase;color:#1a73e8;">New contact form message</p>
          <h2 style="margin:0;font-size:18px;color:#202124;">${escapeHtml(subject)}</h2>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 32px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Name", name)}
            ${row("Email", email)}
            ${company ? row("Company", company) : ""}
            ${row("Message", message)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 32px;background:#f8f9fa;">
          <p style="margin:0;font-size:12px;color:#80868b;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
        </td>
      </tr>
    </table>
  </div>`;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, subject, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Archomak Contact <hello@archomak.com>",
      to: "hello@archomak.com",
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: contactEmailHtml({ name, email, company, subject, message }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error: "Email failed" }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Email failed" }), { status: 500 });
  }
}
