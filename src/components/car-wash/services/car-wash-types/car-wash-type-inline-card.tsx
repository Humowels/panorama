import { CheckIcon } from "@heroicons/react/outline";
import { useLocaleContext } from "@/context/locale.context";

interface IProps {
  icon: string;
  price: string;
  serviceName: string;
  isActive: boolean;
  onChange: () => void;
  id: number;
}
export const CarWashTypeInlineCard = ({ price, icon, serviceName, isActive, onChange }: IProps) => {
  const { t } = useLocaleContext();
  return (
    <div
      onClick={onChange}
      className="w-full px-3 py-2 flex items-center gap-2 justify-between border-y cursor-pointer"
    >
      {!!icon && <img src={icon} alt="icon" />}
      <div className="flex flex-col items-start flex-grow">
        <p className="font-medium">{serviceName}</p>
        <p>
          {price} {t("common.currency")}
        </p>
      </div>
      <div
        className={`w-8 h-8  flex flex-col items-center justify-center rounded-full border-2 border-primary ${
          isActive ? "bg-primary" : "bg-none"
        }`}
      >
        <CheckIcon width={24} className="text-white" />
      </div>
    </div>
  );
};
