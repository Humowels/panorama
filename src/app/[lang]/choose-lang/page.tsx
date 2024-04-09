"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "react-use";
import { useRouter } from "next/navigation";

export default function ChooseLang() {
  const [_, setLang] = useLocalStorage("lang");
  const router = useRouter();

  const chooseLang = (lang: string) => {
    router.push(`/${lang}/services`);
    setLang(lang);
  };

  const paragraphClass = "text-start w-full font-medium ";
  return (
    <div className="bg-blue-200 min-h-screen w-full flex items-center justify-end flex-col py-10">
      <div className="w-full px-3">
        <p className={paragraphClass}>Tilni Tanlang</p>
        <p className={paragraphClass}>Выберите язык</p>
        <p className={paragraphClass}>Choose langugae</p>

        <Button
          onClick={chooseLang.bind(null, "uz")}
          className="w-full mt-24 h-16 font-bold text-xl"
          variant="default"
        >
          {"O'zbek tili"}
        </Button>

        <Button
          onClick={chooseLang.bind(null, "ru")}
          className="w-full h-16 mt-2 font-bold text-xl"
          variant="default"
        >
          Русский язык
        </Button>
        <Button
          onClick={chooseLang.bind(null, "en")}
          className="w-full h-16 mt-2 font-bold text-xl"
          variant="default"
        >
          English
        </Button>
      </div>
    </div>
  );
}
