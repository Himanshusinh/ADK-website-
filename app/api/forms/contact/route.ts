import { NextResponse } from "next/server";
import { submitFormStub } from "@/lib/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, interest, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ ok: false, message: "Missing required fields" }, { status: 400 });
    }

    const result = await submitFormStub("contact", {
      name,
      email,
      phone,
      company,
      interest,
      message,
    });

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }
}
