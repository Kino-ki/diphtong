import { NextResponse, type NextRequest } from "next/server";

const MAINTENANCE_PATH = "/maintenance";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Keep the construction page and the projects section available.
  if (
    pathname === MAINTENANCE_PATH ||
    pathname.startsWith(`${MAINTENANCE_PATH}/`) ||
    pathname === "/projects" ||
    pathname.startsWith("/projects/")
  ) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.pathname = MAINTENANCE_PATH;
  destination.search = "";

  return NextResponse.redirect(destination, 307);
}

export const config = {
  // Leave API endpoints and static assets alone; route page requests through
  // the temporary construction page unless they are under /projects.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
