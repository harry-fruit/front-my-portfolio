import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: "sa-east-1",
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY as string,
  },
});

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required!" },
      { status: 400 }
    );
  }

  const to = "contact@isaquedev.com";

  try {
    const command = new SendEmailCommand({
      Destination: { ToAddresses: [to] },
      Message: {
        Body: {
          Text: { Data: message },
        },
        Subject: { Data: `New message on my portfolio from ${name}` },
      },
      Source: process.env.EMAIL_FROM as string, // Must be a verified email in SES
    });

    await sesClient.send(command);
    return NextResponse.json({ success: "Email sent successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email!" }, { status: 500 });
  }
}
