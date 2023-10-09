import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, locales } from "./i18n";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingValidLocale = locales.every((locale) => {
    return !pathname.includes(locale);
  });

  if (pathnameIsMissingValidLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.nextUrl.origin),
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};
