import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/libs/auth/auth";

const PUBLIC_ROUTES = ["/", "/login", "/signup"];
const AUTH_ROUTES = ["/login", "/signup"];
const PROTECTED_ROUTES = [
  "/dashboard",
  "/calculator",
  "/watchlist",
  "/profile"
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = await auth.api.getSession({
    headers: request.headers
  });

  const isLoggedIn = !!session?.user;

  if (isLoggedIn && AUTH_ROUTES.some((r) => pathname.startsWith(r))) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (PROTECTED_ROUTES.some((r) => pathname.startsWith(r)) && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
