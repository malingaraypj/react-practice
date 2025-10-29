import { connectDB } from "@/lib/dbConfig";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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

    const token = {
      id: user._id,
      email: user.email,
    };

    console.log("insider login: ", process.env.JWT_SECRET);

    const jwt_secret = process.env.JWT_SECRET;

    if (!jwt_secret) {
      console.log("JWT_SECRET is not defined");
      throw new Error("JWT_SECRET is not defined");
    }

    const expiresIn = parseInt(process.env.expiresIn || "60");
    const jwtToken = jwt.sign(token, jwt_secret!, {
      expiresIn: expiresIn,
    });

    const res = NextResponse.json(
      {
        message: "Login successful",
        data: user,
        token: jwtToken,
      },
      { status: 200 }
    );

    res.cookies.set("token", jwtToken, {
      httpOnly: true,
      sameSite: "strict",
    });

    return res;
  } catch (error) {
    let err = "Internal server error";
    if (error instanceof Error) err = error.message;
    return NextResponse.json(
      { error: err || "Internal server error" },
      { status: 500 }
    );
  }
}
