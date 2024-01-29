"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocaleContext } from "@/context/locale.context";

export const Welcome = () => {
  const { lang } = useLocaleContext();
  const paragraphClass = "text-center w-full";
  return (
    <div className="w-full px-3">
      <h2 className="mb-4 font-bold text-center"> 🚗 Panorama BOT</h2>
      <p className={paragraphClass}>Xush Kelibsiz!</p>
      <p className={paragraphClass}>Добро пожаловать</p>
      <p className={paragraphClass}>Welcome!</p>
      <Link href={`/${lang}/choose-lang`}>
        <Button className="w-full mt-24 h-16 font-bold text-xl" variant="default">
          Start
        </Button>
      </Link>
    </div>
  );
};
