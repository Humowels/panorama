import { CheckIcon } from "@heroicons/react/outline";

interface IProps {
  icon?: string;
  serviceName?: string;
  isActive: boolean;
  onChange: () => void;
}
export const PaymentMethod = ({ icon, serviceName, isActive, onChange }: IProps) => {
  return (
    <div
      onClick={onChange}
      className="w-full px-3 py-2 flex items-center gap-2 justify-between border-y"
    >
      <div className="flex flex-col items-start flex-grow">
        {serviceName ? (
          <p className="font-medium text-sm">{serviceName}</p>
        ) : (
          <img src={icon} alt={serviceName} />
        )}
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
