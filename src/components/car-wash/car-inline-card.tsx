import { CarNumberPlatte } from "@/components/car-wash/car-number-platte";
import Link from "next/link";

interface IProps {
  carName: string;
  carNumber: string;
  regionCode: string;
  carId: string;
}
export const CarInlineCard = ({ carNumber, carName, regionCode, carId }: IProps) => {
  return (
    <Link
      href={`car-wash/${carId}/services`}
      className="border-y border-gray-200 py-2 grid grid-cols-12 items-center justify-between gap-2"
    >
      <p className="col-span-6">{carName}</p>
      <div className="col-span-6">
        <CarNumberPlatte number={carNumber} regionCode={regionCode} />
      </div>
    </Link>
  );
};
