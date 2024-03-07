"use client";

import { CafeCartContextProvider } from "@/context/cafe-cart.context";
import { ReactNode } from "react";
import { CafeCheckoutContextProvider } from "@/context/cafe-checkout.context";

interface IProps {
  children: ReactNode;
}

export default function CafeLayout({ children }: IProps) {
  return (
    <CafeCartContextProvider>
      <CafeCheckoutContextProvider>{children}</CafeCheckoutContextProvider>
    </CafeCartContextProvider>
  );
}
