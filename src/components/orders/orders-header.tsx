"use client";
import { ShoppingCartIcon, XIcon } from "@heroicons/react/solid";
import { useLocaleContext } from "@/context/locale.context";
import { useRouter } from "next/navigation";

export const OrdersHeader = () => {
  const { t } = useLocaleContext();
  const router = useRouter();

  return (
    <header className="flex items-center border-b py-5 px-4 gap-3">
      <ShoppingCartIcon width={24} />
      <p className="font-bold flex-grow text-xl">{t("order.all_services_and_orders")}</p>
      <div
        onClick={router.back}
        className="w-10 h-10 bg-primary  rounded-full flex items-center justify-center cursor-pointer"
      >
        <XIcon className="w-6 text-white" />
      </div>
    </header>
  );
};
