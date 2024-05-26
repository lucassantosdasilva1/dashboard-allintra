import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: any) {
  return NextResponse.redirect(new URL("/dashboard", request.url));
}

export const config = {
  /*
   * Da Match com todos os caminhos exceto para os que esttão na raiz /:
   
   */
  matcher: "/",
  // matcher: "/:path*",
};
