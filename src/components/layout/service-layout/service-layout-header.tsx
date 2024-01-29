import { ShoppingBagIcon } from "@heroicons/react/solid";

export const ServiceLayoutHeader = () => {
  return (
    <header className="bg-primary flex p-4 items-center justify-between ">
      <p className="text-white">PANORAMA</p>
      <div className="flex items-center gap-8">
        <div className="w-9 h-9 rounded-full bg-red-500"></div>
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer">
          <ShoppingBagIcon className="w-5" />
        </div>
      </div>
    </header>
  );
};
