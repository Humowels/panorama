"use client";

import { CarWashTypeInlineCard } from "@/components/car-wash/services/car-wash-types/car-wash-type-inline-card";
import { useLocaleContext } from "@/context/locale.context";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsQueryFn } from "@/react-query/queries/services.query";
import { IProduct } from "@/lib/interfaces/product.interface";
import { parseNumber, priceFormatter } from "@/lib/utils";
import { CarWashServicesSkeleton } from "@/components/skeletons/car-wash-services-skeleton";
import { useCarWashContext } from "@/context/car-wash-cart.context";

export const CarWashTypes = () => {
  const { t, lang } = useLocaleContext();
  const { data, isLoading } = useQuery({
    queryKey: ["all-carwash-services", lang],
    queryFn: () => getAllProductsQueryFn("Услуга"),
  });
  const { carWashCart, setCarWashCart, selectedService, setSelectedService } = useCarWashContext();

  const loader = (
    <div className="flex flex-col space-y-2">
      <CarWashServicesSkeleton />
      <CarWashServicesSkeleton />
      <CarWashServicesSkeleton />
    </div>
  );

  const handleSelectService = (service: IProduct) => {
    setSelectedService(service);
    if (carWashCart) {
      setCarWashCart({
        totalPrice: parseNumber(service.price),
        items: [
          {
            id: service.variants[0].id,
            title: service.title,
            price: service.price,
            productId: service.id,
            quantity: 1,
          },
        ],
      });
    }
  };

  const services = data?.data || [];

  useEffect(() => {
    if (data) {
      handleSelectService(data?.data[0]);
    }
  }, [data]);

  const renderServices = services?.map((service: IProduct) => (
    <CarWashTypeInlineCard
      key={service.id}
      onChange={handleSelectService.bind(null, service)}
      isActive={selectedService?.id === service.id}
      icon=""
      price={priceFormatter(service.price)}
      serviceName={service.title}
      id={service.id}
    />
  ));

  return (
    <div>
      <h2 className="text-lg font-bold text-black text-center py-3 ">
        {t("services.choose_wash_type")}
      </h2>
      {isLoading ? loader : <div className="flex flex-col space-y-2">{renderServices}</div>}
    </div>
  );
};
