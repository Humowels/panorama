"use client";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useLocaleContext } from "@/context/locale.context";
import { useRouter } from "next/navigation";
import { PaymentMethod } from "@/components/cafe/payment/payment-method";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCafeCheckoutContext } from "@/context/cafe-checkout.context";
import { useQuery } from "@tanstack/react-query";
import { shippingMethodsQueryFn } from "@/react-query/queries/shipping-type.query";
import { IShippingMethod } from "@/lib/interfaces/shipping-methods.interface";
import { useCallback, useEffect } from "react";

export const ShippingMethods = () => {
  const { t, lang } = useLocaleContext();
  const { selectedShippingMethod, setSelectedShippingMethod, createOrder } =
    useCafeCheckoutContext();
  const router = useRouter();

  const { data } = useQuery<IShippingMethod[]>({
    queryKey: ["shipping-methods"],
    queryFn: () => shippingMethodsQueryFn(),
  });

  useEffect(() => {
    if (data) {
      setSelectedShippingMethod(data[0]);
    }
  }, [data]);

  const renderShippingMethods = useCallback(() => {
    return data?.map((method, index) => (
      <PaymentMethod
        key={index}
        isActive={method.title === selectedShippingMethod?.title}
        onChange={setSelectedShippingMethod.bind(null, method)}
        serviceName={method.title}
      />
    ));
  }, [data, selectedShippingMethod]);

  return (
    <div>
      <div className="relative pt-2 pb-5">
        <ChevronLeftIcon
          width={24}
          className="absolute left-2 cursor-pointer"
          onClick={router.back}
        />
        <p className="text-center">{t("cafe.choose_shipping_methods")}</p>
      </div>
      <div className="flex flex-col space-y-3">{renderShippingMethods()}</div>
      <Link
        href={`/${lang}/service/cafe/order-status`}
        className="w-full px-4 flex items-center justify-center sticky bottom-2 mt-4"
      >
        <Button
          onClick={createOrder}
          className="max-w-[350px] w-full mx-auto rounded-md bg-primary h-14 text-white text-center"
        >
          <p>{t("cafe.continue")}</p>
        </Button>
      </Link>
    </div>
  );
};
