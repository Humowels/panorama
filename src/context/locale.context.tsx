"use client";

import { getTranslator, locales, ValidLocale } from "@/i18n";
import { getTelegramInitData, getUserId } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

interface IContext {
  t: (
    key: string,
    params?:
      | {
          [key: string]: string | number;
        }
      | undefined,
  ) => any;
  lang: string | string[];
}

interface IProps {
  children: React.ReactNode;
}

const LocaleContext = createContext<IContext>({} as IContext);

export const useLocaleContext = () => useContext(LocaleContext);

function useDelayedRender<T>(asyncFun: () => Promise<T>, deps = []) {
  const [output, setOutput] = useState<T>();

  useEffect(() => {
    (async function () {
      try {
        setOutput(await asyncFun());
      } catch (e) {
        console.error(e);
      }
    })();
  }, deps);
  return output === undefined ? null : output;
}

export const LocaleContextProvider = ({ children }: React.PropsWithChildren<IProps>) => {
  const params = useParams();
  const [lang] = useLocalStorage("lang");
  const router = useRouter();
  const initData = getTelegramInitData();
  const userId = getUserId();

  useEffect(() => {
    window.chatId = userId ?? initData.user?.id;
  }, []);

  useEffect(() => {
    if (!!lang && window.location.pathname.split("/").length <= 2) {
      router.push(`/${lang}/services`);
    }
  }, [lang]);

  return useDelayedRender(async () => {
    const t = await getTranslator(
      `${params.lang}` as ValidLocale, // our middleware ensures this is valid
    );
    const value = {
      t,
      lang: params.lang,
    };
    return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
  });
};
