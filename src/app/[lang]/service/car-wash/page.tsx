"use client";
import { useLocaleContext } from "@/context/locale.context";
import { CarInlineCard } from "@/components/car-wash/car-inline-card";
import { useQuery } from "@tanstack/react-query";
import { getCarsQueryFn } from "@/react-query/queries/cars.query";
import { ICar } from "@/lib/interfaces/cars.interface";
import { CarInlineCardSkeleton } from "@/components/skeletons/car-inline-card-skeleton";

export default function CarWash() {
  const { t } = useLocaleContext();

  const { data, isLoading } = useQuery<ICar[]>({
    queryFn: () => getCarsQueryFn(),
    queryKey: ["cars"],
  });

  const renderCars = data?.map((car, index) => {
    const [carName, carNumberPlatte] = car.value.split(" ");

    const carRegionCode = carNumberPlatte.slice(0, 2);
    const carNumber = carNumberPlatte.slice(2);

    return (
      <CarInlineCard
        key={index}
        carId={car.value}
        carName={carName}
        carNumber={carNumber}
        regionCode={carRegionCode}
      />
    );
  });

  return (
    <div className="py-8 px-6">
      <h2 className="font-bold text-2xl">{t("car_wash.my_cars")}</h2>
      <p className="mt-3">{t("car_wash.choose_car_to_wash")}</p>

      {isLoading ? (
        <div>
          <CarInlineCardSkeleton />
          <CarInlineCardSkeleton />
        </div>
      ) : (
        renderCars
      )}
    </div>
  );
}
