import { ReactNode } from "react";
import { CarWashContextProvider } from "@/context/car-wash-cart.context";

interface IProps {
  children: ReactNode;
}
export default function CarWashLayout({ children }: IProps) {
  return <CarWashContextProvider>{children}</CarWashContextProvider>;
}
