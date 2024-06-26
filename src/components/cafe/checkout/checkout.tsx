"use client";
import { OrderLocations } from "@/components/cafe/checkout/order-locations";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";
import { useRouter } from "next/navigation";
import { useCafeCheckoutContext } from "@/context/cafe-checkout.context";
import { locationsMock } from "@/lib/mocks/address.mock";
import { Retryer } from "react-query/types/core/retryer";

export const Checkout = () => {
  const { t, lang } = useLocaleContext();
  const { selectedAddress, setSelectedAddress } = useCafeCheckoutContext();
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
          {locationsMock.map(({ Icon, ...location }, index) => {
            if (!Icon) {
              return null;
            }

            return (
              <OrderLocations
                serviceName={location.address}
                key={index}
                isActive={location.address === selectedAddress.address}
                Icon={Icon}
                advantages={[]}
                onChange={setSelectedAddress.bind(null, location)}
              />
            );
          })}
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
