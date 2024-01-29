"use client";
import { useLocaleContext } from "@/context/locale.context";
import { CarInlineCard } from "@/components/car-wash/car-inline-card";

export default function CarWash() {
  const { t } = useLocaleContext();
  return (
    <div className="py-8 px-6">
      <h2 className="font-bold text-2xl">{t("car_wash.my_cars")}</h2>
      <p className="mt-3">{t("car_wash.choose_car_to_wash")}</p>

      <CarInlineCard carId="1" carName="Chevrolet Malibu" carNumber="C270QA" regionCode="70" />
      <CarInlineCard carId="2" carName="Chevrolet Tahoe" carNumber="Z777ZZ" regionCode="70" />
    </div>
  );
}
