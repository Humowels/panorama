import { ReactNode } from "react";
import { ServiceLayout } from "@/components/layout/service-layout/service-layout";

interface IProps {
  children: ReactNode;
}
export default function AALayout({ children }: IProps) {
  return <ServiceLayout>{children}</ServiceLayout>;
}
