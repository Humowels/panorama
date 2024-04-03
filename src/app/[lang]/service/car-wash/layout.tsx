import { ReactNode } from "react";
import { CarWashContextProvider } from "@/context/car-wash-cart.context";
import ReactQueryProvider from "@/context/react-query.context";

interface IProps {
  children: ReactNode;
}
export default function CarWashLayout({ children }: IProps) {
  return <CarWashContextProvider>{children}</CarWashContextProvider>;
}
