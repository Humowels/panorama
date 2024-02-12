"use client";
import { useLocaleContext } from "@/context/locale.context";
import { ServiceCard } from "@/components/services/service-card";

export default function Services() {
  const { t } = useLocaleContext();
  return (
    <div className="bg-blue-200  min-h-screen w-full max-h-screen h-full py-10 px-5 ">
      <p className="font-bold">{t("services.welcome_message")}</p>
      <p className="mt-2 font-medium leading-1">{t("services.watch_video")}</p>
      <iframe
        className="mt-4 w-full rounded-md"
        width="auto"
        height="200"
        src="https://www.youtube.com/embed/GdorS19m2uE"
        title="Car Wash Ad Video Template (Editable)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="mt-6 flex flex-col space-y-2">
        <ServiceCard isService title={t("services.car_wash")} link="service/car-wash" />
        <ServiceCard isService title={`${t("services.cafe")} Ayva`} link="service/cafe" />

        <ServiceCard title={t("services.contact")} link="contact" />
        <ServiceCard title={t("services.about_us")} link="about_us" />
      </div>
    </div>
  );
}
