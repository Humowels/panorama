"use client";
import { OrderLocations } from "@/components/cafe/checkout/order-locations";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { priceFormatter } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";
import { useRouter } from "next/navigation";

interface ILocation {
  title: string;
  advantages: string[];
}

const locations: ILocation[] = [
  { title: "К столу в кафе", advantages: [] },
  { title: "IT-Park Mirzo-Ulugbek", advantages: ["Бесплатно", "курьером."] },
  { title: "По городу Ташкент", advantages: ["Платно"] },
];

export const Checkout = () => {
  const { t, lang } = useLocaleContext();
  const [selectedLocation, setSelectedLocation] = useState<ILocation>(locations[0]);
  const router = useRouter();
  return (
    <div className="flex flex-col ">
      <div className="flex-grow">
        <div className="relative pt-2 pb-5">
          <ChevronLeftIcon
            width={24}
            className="absolute left-2 cursor-pointer"
            onClick={router.back}
          />
          <p className="text-center">{t("cafe.where_to_delivery")}</p>
        </div>
        <div className="flex flex-col space-y-3">
          {locations.map((location, index) => (
            <OrderLocations
              serviceName={location.title}
              key={index}
              isActive={location.title === selectedLocation.title}
              icon=""
              advantages={location.advantages}
              onChange={setSelectedLocation.bind(null, location)}
            />
          ))}
        </div>
      </div>
      <Link
        href={`/${lang}/service/cafe/payment`}
        className="w-full px-4 flex items-center justify-center sticky bottom-2 mt-4"
      >
        <Button className="max-w-[350px] w-full mx-auto rounded-md bg-primary h-14 text-white text-center">
          <p>{t("cafe.continue")}</p>
        </Button>
      </Link>
    </div>
  );
};
