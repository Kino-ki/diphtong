import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(req: NextRequest) {
  const { name, email, website, content } = await req.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
  if (!process.env.MY_EMAIL) {
    throw new Error("Environment variable MY_EMAIL is not defined.");
  }

  const mailOptions: Mail.Options = {
    from: {
      name: "Diphtong Web Agency",
      address: process.env.MY_EMAIL,
    },
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email}) ${website}`,
    text: `${content}`,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: err || "Unknown error" },
      { status: 500 }
    );
  }
}
