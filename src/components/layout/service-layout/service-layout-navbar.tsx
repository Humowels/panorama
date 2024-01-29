"use client";
import { services } from "@/lib/mocks/services";
import { useLocaleContext } from "@/context/locale.context";
import { NavLink } from "@/components/ui/navlink";

export const ServiceLayoutNavbar = () => {
  const { t } = useLocaleContext();
  const renderServices = services.map((service, index) => (
    <NavLink href={service.href} key={index} className="text-xs">
      {t(service.name)}
    </NavLink>
  ));
  return <nav className="grid grid-cols-4 ">{renderServices}</nav>;
};
