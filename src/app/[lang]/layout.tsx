"use client";
import "./globals.css";
import { LocaleContextProvider } from "@/context/locale.context";
import ReactQueryProvider from "@/context/react-query.context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface ICommonProps {
  params: {
    productId: string;
  };
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const shopName = pathname.split("/")[1]!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [initialPathname, setInitialPathname] = useState("");
  const [forceExit, setForceExit] = useState(false);

  useEffect(() => {
    setInitialPathname(pathname);
  }, []);

  useEffect(() => {
    const forceExitParam = searchParams.get("forceExit");
    if (forceExitParam) {
      setForceExit(true);
    }
  }, []);

  useEffect(() => {
    if (window.Telegram && initialPathname) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.enableClosingConfirmation();
      window.Telegram.WebApp.BackButton.onClick(() => {
        const historyDepth = window.history.length;
        const pathname = window.location.pathname;
        if (historyDepth === 1 || (pathname === initialPathname && forceExit)) {
          window.Telegram.WebApp.close();
        } else {
          router.back();
        }
      });
    }
  }, [initialPathname]);

  useEffect(() => {
    if (window.Telegram) {
      const backButton = window.Telegram.WebApp.BackButton;
      if (pathname === `/${shopName}`) {
        backButton.hide();
      } else {
        backButton.show();
      }
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="max-w-sm w-full mx-auto bg-white min-h-screen relative">
          <ReactQueryProvider>
            <LocaleContextProvider>{children}</LocaleContextProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
