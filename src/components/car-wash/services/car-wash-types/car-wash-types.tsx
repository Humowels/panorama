"use client";

import { CarWashTypeInlineCard } from "@/components/car-wash/services/car-wash-types/car-wash-type-inline-card";
import { useLocaleContext } from "@/context/locale.context";
import { useState } from "react";

export const CarWashTypes = () => {
  const { t } = useLocaleContext();
  const [activeType, setActiveType] = useState("1");
  return (
    <div>
      <h2 className="text-lg font-bold text-black text-center py-3 ">
        {t("services.choose_wash_type")}
      </h2>
      <div className="flex flex-col space-y-2">
        <CarWashTypeInlineCard
          onChange={setActiveType}
          isActive={activeType === "1"}
          icon=""
          price="150.000 sum"
          serviceName="2-х фазная мойкa"
          id="1"
        />
        <CarWashTypeInlineCard
          onChange={setActiveType}
          isActive={activeType === "2"}
          icon=""
          price="150.000 sum"
          serviceName="2-х фазная мойкa"
          id="2"
        />
        <CarWashTypeInlineCard
          onChange={setActiveType}
          isActive={activeType === "3"}
          icon=""
          price="150.000 sum"
          serviceName="2-х фазная мойкa"
          id="3"
        />
      </div>
    </div>
  );
};
