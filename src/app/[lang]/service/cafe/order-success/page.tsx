"use client";
import { useLocaleContext } from "@/context/locale.context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderSuccess() {
  const { t, lang } = useLocaleContext();
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <div className="w-[100px] h-[100px] rounded-md bg-red-500" />
      <p className="w-[250px] text-center text-primary font-semibold my-4">
        {t("order.order_success_wait_for_waiter")}
      </p>
      <Link href={`/${lang}/service/cafe`} className="w-full flex justify-center">
        <Button variant="primary" className="max-w-[200px] h-14 ">
          {t("order.go_back_to_menu")}
        </Button>
      </Link>
    </div>
  );
}
