import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const publicRoutes = ["/login", "/signup"];
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);

  const token = request.cookies.get("token")?.value || "";

  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/profile", "/"],
};
