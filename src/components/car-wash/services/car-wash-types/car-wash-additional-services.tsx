"use client";

import { CarWashTypeInlineCard } from "@/components/car-wash/services/car-wash-types/car-wash-type-inline-card";
import { useLocaleContext } from "@/context/locale.context";
import { useState } from "react";

export const CarWashAdditionalServices = () => {
  const { t } = useLocaleContext();
  const [activeService, setActiveService] = useState("1");
  return (
    <div>
      <h2 className="text-lg font-bold text-black text-center py-3 ">
        {t("services.choose_additional_service")}
      </h2>
      <div className="flex flex-col space-y-2">
        <CarWashTypeInlineCard
          onChange={setActiveService}
          isActive={activeService === "1"}
          icon=""
          price="150.000 sum"
          serviceName="2-х фазная мойкa"
          id="1"
        />
        <CarWashTypeInlineCard
          onChange={setActiveService}
          isActive={activeService === "2"}
          icon=""
          price="150.000 sum"
          serviceName="2-х фазная мойкa"
          id="2"
        />
        <CarWashTypeInlineCard
          onChange={setActiveService}
          isActive={activeService === "3"}
          icon=""
          price="150.000 sum"
          serviceName="2-х фазная мойкa"
          id="3"
        />
      </div>
    </div>
  );
};
