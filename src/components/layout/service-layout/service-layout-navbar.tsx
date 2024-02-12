"use client";
import { services } from "@/lib/mocks/services";
import { useLocaleContext } from "@/context/locale.context";
import { NavLink } from "@/components/ui/navlink";

export const ServiceLayoutNavbar = () => {
  const { t, lang } = useLocaleContext();
  const renderServices = services.map((service, index) => (
    <NavLink
      href={`/${lang + service.href}`}
      key={index}
      className="text-xs text-center flex items-center justify-center h-12"
    >
      {t(service.name)}
    </NavLink>
  ));
  return <nav className="grid grid-cols-4 ">{renderServices}</nav>;
};
