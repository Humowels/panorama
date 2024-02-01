import { CheckIcon } from "@heroicons/react/outline";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  icon: string;
  price: string;
  serviceName: string;
  isActive: boolean;
  onChange: Dispatch<SetStateAction<string>>;
  id: string;
}
export const CarWashTypeInlineCard = ({
  price,
  icon,
  serviceName,
  isActive,
  id,
  onChange,
}: IProps) => {
  return (
    <div
      onClick={onChange.bind(null, id)}
      className="w-full px-3 py-2 flex items-center gap-2 justify-between border-y"
    >
      <img src={icon} alt="icon" />
      <div className="flex flex-col items-start flex-grow">
        <p className="font-medium">{serviceName}</p>
        <p>{price}</p>
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
