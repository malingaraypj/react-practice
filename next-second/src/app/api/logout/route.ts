import { NextResponse } from "next/server";

export const GET = async () => {
  const response = NextResponse.json({ message: "logout successful" });

  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return response;
};
