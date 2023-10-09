"use client";

import { getTranslator, ValidLocale } from "@/i18n";
import { useParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IContext {
  t: (
    key: string,
    params?:
      | {
          [key: string]: string | number;
        }
      | undefined,
  ) => any;
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

export const LocaleContextProvider = ({
  children,
}: React.PropsWithChildren<IProps>) => {
  const params = useParams();

  return useDelayedRender(async () => {
    const t = await getTranslator(
      `${params.lang}` as ValidLocale, // our middleware ensures this is valid
    );
    const value = {
      t,
    };
    return (
      <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
    );
  });
};
