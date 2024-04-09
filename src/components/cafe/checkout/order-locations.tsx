import { CheckIcon } from "@heroicons/react/outline";
import { ElementType, SVGProps } from "react";

interface IProps {
  Icon: ((props: SVGProps<SVGSVGElement>) => JSX.Element);
  advantages: string[];
  serviceName: string;
  isActive: boolean;
  onChange: () => void;
}
export const OrderLocations = ({ advantages, Icon, serviceName, isActive, onChange }: IProps) => {
  return (
    <div
      onClick={onChange}
      className="w-full px-3 py-2 flex items-center gap-2 justify-between border-y cursor-pointer"
    >
      <Icon width={28} />
      <div className="flex flex-col items-start flex-grow">
        <p className="font-medium text-sm">{serviceName}</p>
        <p className="flex items-center gap-2">
          {advantages.map((item, index) => (
            <span className="text-xs text-gray-500" key={index}>
              {item}
            </span>
          ))}
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
