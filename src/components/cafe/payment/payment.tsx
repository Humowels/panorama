"use client";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useLocaleContext } from "@/context/locale.context";
import { useRouter } from "next/navigation";
import { PaymentMethod } from "@/components/cafe/payment/payment-method";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IPaymentMethod {
  title?: string;
  icon: string;
}

const paymentMethods: IPaymentMethod[] = [
  {
    title: "Наличными",
    icon: "",
  },
  {
    title: "Payme",
    icon: "",
  },
  {
    title: "Click",
    icon: "",
  },
  {
    title: "Uzum Bank",
    icon: "",
  },
];

export const Payment = () => {
  const { t, lang } = useLocaleContext();
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<IPaymentMethod>(
    paymentMethods[0],
  );

  const renderPaymentMethods = paymentMethods.map((method, index) => (
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
        <Button className="max-w-[350px] w-full mx-auto rounded-md bg-primary h-14 text-white text-center">
          <p>{t("cafe.continue")}</p>
        </Button>
      </Link>
    </div>
  );
};
