"use client"
import { ShoppingBagIcon } from "@heroicons/react/solid";
import Link from "next/link";
import {useLocaleContext} from "@/context/locale.context";

export const ServiceLayoutHeader = () => {
    const {lang} = useLocaleContext()
  return (
    <header className="bg-primary flex p-4 items-center justify-between ">
      <p className="text-white">PANORAMA</p>
      <div className="flex items-center gap-8">
        <div className="w-9 h-9 rounded-full bg-red-500"></div>
        <Link href={`/${lang}/orders`} className="w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer z-10">
          <ShoppingBagIcon className="w-5" />
        </Link>
      </div>
    </header>
  );
};
