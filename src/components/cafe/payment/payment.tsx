"use client";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useLocaleContext } from "@/context/locale.context";
import { useRouter } from "next/navigation";
import { PaymentMethod } from "@/components/cafe/payment/payment-method";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { paymentMethodsMock } from "@/lib/mocks/payment-methods.mock";
import { useCafeCheckoutContext } from "@/context/cafe-checkout.context";

export const Payment = () => {
  const { t, lang } = useLocaleContext();
  const { selectedPaymentMethod, setSelectedPaymentMethod, createOrder } = useCafeCheckoutContext();
  const router = useRouter();

  const renderPaymentMethods = paymentMethodsMock.map((method, index) => (
    <PaymentMethod
      key={index}
      isActive={method.title === selectedPaymentMethod.title}
      onChange={setSelectedPaymentMethod.bind(null, method)}
      serviceName={method.title}
    />
  ));

  return (
    <div>
      <div className="relative pt-2 pb-5">
        <ChevronLeftIcon
          width={24}
          className="absolute left-2 cursor-pointer"
          onClick={router.back}
        />
        <p className="text-center">{t("cafe.choose_payment")}</p>
      </div>
      <div className="flex flex-col space-y-3">{renderPaymentMethods}</div>
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
