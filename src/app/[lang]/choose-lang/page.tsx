"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ChooseLang() {
  const paragraphClass = "text-start w-full font-medium ";
  return (
    <div className="bg-blue-200 min-h-screen w-full flex items-center justify-end flex-col py-10">
      <div className="w-full px-3">
        <p className={paragraphClass}>Tilni Tanlang</p>
        <p className={paragraphClass}>Выберите язык</p>
        <p className={paragraphClass}>Choose langugae</p>
        <Link href={`/uz/login`}>
          <Button className="w-full mt-24 h-16 font-bold text-xl" variant="default">
            {"O'zbek tili"}
          </Button>
        </Link>
        <Link href={`/ru/login`}>
          <Button className="w-full h-16 mt-2 font-bold text-xl" variant="default">
            Русский язык
          </Button>
        </Link>
        <Link href={`/en/login`}>
          <Button className="w-full h-16 mt-2 font-bold text-xl" variant="default">
            English
          </Button>
        </Link>
      </div>
    </div>
  );
}
