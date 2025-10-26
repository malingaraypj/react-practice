import { connectDB } from "@/lib/dbConfig";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    console.log(email, password);

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "Invalid password",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "Login successful",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    let err = "Internal server error";
    if (error instanceof Error) err = error.message;
    return NextResponse.json(
      { error: err || "Internal server error" },
      { status: 500 }
    );
  }
}
