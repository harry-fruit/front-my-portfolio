import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
  }

  console.log("Saving user:", { name, email });
  return NextResponse.json({ success: "User created successfully!" }, { status: 201 });
}