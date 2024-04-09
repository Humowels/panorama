import { IAddress } from "@/lib/interfaces/checkout.interface";
import { OfficeBuildingIcon, TruckIcon } from "@heroicons/react/outline";

export const locationsMock: IAddress[] = [
  { address: "К столу в кафе", city: "", lat: 0, long: 0, Icon: OfficeBuildingIcon },
  { address: "IT-Park Mirzo-Ulugbek", city: "", lat: 0, long: 0, Icon: OfficeBuildingIcon },
  { address: "По городу Ташкент", city: "", lat: 0, long: 0, Icon: TruckIcon },
];
