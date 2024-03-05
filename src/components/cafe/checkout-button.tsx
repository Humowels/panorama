"use client";
import { Button } from "@/components/ui/button";
import { useLocaleContext } from "@/context/locale.context";
import { useCafeCartContext } from "@/context/cafe-cart.context";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { priceFormatter } from "@/lib/utils";
import Link from "next/link";
import { useLocation } from "react-use";

export const CheckoutButton = () => {
  const { t, lang } = useLocaleContext();
  const { cafeCart } = useCafeCartContext();
  const unAllowedPages = ["checkout", "payment", "order-status"];
  const location = useLocation();

  const isDisAllowed = unAllowedPages.some((page) => location.pathname?.includes(page));

  if (isDisAllowed) return null;

  return (
    <Link
      href={`/${lang}/service/cafe/checkout`}
      className="w-full px-4 flex items-center justify-center sticky bottom-2"
    >
      <Button className="max-w-[350px] w-full mx-auto rounded-md bg-primary h-14 text-white flex items-center justify-between">
        <p>{t("cafe.checkout")}</p>
        <p className="flex items-center text-gray-500">
          {priceFormatter(cafeCart?.totalPrice || "0")} {t("common.currency")}
          <ChevronRightIcon width={18} />
        </p>
      </Button>
    </Link>
  );
};
