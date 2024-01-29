"use client";

import { ReactNode } from "react";
import { ServiceLayoutHeader } from "@/components/layout/service-layout/service-layout-header";
import { ServiceLayoutNavbar } from "@/components/layout/service-layout/service-layout-navbar";

interface IProps {
  children: ReactNode;
}
export const ServiceLayout = ({ children }: IProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-service_bg">
      <ServiceLayoutHeader />
      <ServiceLayoutNavbar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};
