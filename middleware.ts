import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || null;

  const { pathname } = req.nextUrl;

  // ---------------------------------------------------
  // 🟩 Jika user belum login → halaman yang wajib login
  // ---------------------------------------------------
  const protectedRoutes = ["/dashboard", "/dashboard/profile", "/dashboard/settings"];

  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // ---------------------------------------------------
  // 🟦 Jika user sudah login → cegah akses ke /signin & /register
  // ---------------------------------------------------
  if (token && (pathname === "/signin" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // ---------------------------------------------------
  // 🟨 Yang kamu minta:
  // Jika user SUDAH login dan akses /register → langsung redirect
  // ---------------------------------------------------
  if (token && pathname.startsWith("/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

// Terapkan middleware ke semua route (kecuali file)
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/register",
    "/signin",
  ],
};
