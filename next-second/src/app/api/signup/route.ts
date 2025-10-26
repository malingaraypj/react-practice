import { connectDB } from "@/lib/dbConfig";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password, username } = await req.json();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: passwordHash,
      username,
    });

    return NextResponse.json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    let err = "Internal server error";
    if (error instanceof Error) err = error.message;
    return NextResponse.json(
      { error: err || "Internal server error" },
      { status: 500 }
    );
  }
}
