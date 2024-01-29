"use client";

import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";
import { ChevronRightIcon } from "@heroicons/react/outline";

export default function Login() {
  const { t } = useLocaleContext();
  return (
    <div className="bg-blue-200 relative min-h-screen w-full max-h-screen h-full pt-10 flex flex-col justify-center">
      <div className=" h-1/2">
        <p className="font-bold">{t("login.enter_your_phone_number_with_code")}.</p>
        <p className="mt-2 font-medium">{t("login.we_will_send_otp")}</p>
      </div>
      <div className="w-full absolute bottom-0 bg-white border border-gray-400 flex items-center pr-3 pl-6">
        <input className="py-4 flex-grow outline-0 font-semibold" defaultValue="+998" />
        <Link
          href="otp"
          className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
        >
          <ChevronRightIcon width={20} />
        </Link>
      </div>
    </div>
  );
}
