import { CafeCartContextProvider } from "@/context/cafe-cart.context";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function CafeLayout({ children }: IProps) {
  return <CafeCartContextProvider>{children}</CafeCartContextProvider>;
}
