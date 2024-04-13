"use client";
import { LocaleContextProvider } from "@/context/locale.context";
import ReactQueryProvider from "@/context/react-query.context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { getTelegramId } from "@/react-query/fetcher";

export interface ICommonProps {
  params: {
    productId: string;
    orderId: string;
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
    const userId = searchParams.get("userId");
    if (userId) {
      localStorage.setItem("userId", userId);
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

    const telegramId = getTelegramId();

    if (process.env.NODE_ENV === "production" && !Boolean(telegramId)) {
      router.push("/telegram-not-initialized");
    }
  }, [initialPathname]);

  useEffect(() => {
    if (window.Telegram) {
      const backButton = window.Telegram.WebApp.BackButton;
      if (pathname.split("/")[2] === `services`) {
        backButton.hide();
      } else {
        backButton.show();
      }
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" async />
      </head>

      <body className="bg-gray-50">
        <div className="max-w-sm w-full mx-auto bg-white min-h-screen relative">
          <ReactQueryProvider>
            <LocaleContextProvider>
              {JSON.stringify(window?.Telegram)}
              {children}
            </LocaleContextProvider>
          </ReactQueryProvider>
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
