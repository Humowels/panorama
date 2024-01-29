import Image from "next/image";

interface IProps {
  regionCode: string;
  number: string;
  size?: "sm" | "default";
}
export const CarNumberPlatte = ({ number, regionCode, size = "default" }: IProps) => {
  const isSmall = size === "sm";
  return (
    <div
      className={`grid grid-cols-4 ${
        isSmall ? " border " : "border-2"
      } border-black rounded-md items-center`}
    >
      <p
        className={`${
          isSmall ? "p-1 text-xs border-r" : " p-2 text-base border-r-2"
        } col-span-1 h-fit  border-black`}
      >
        {regionCode}
      </p>
      <p
        className={`${
          isSmall ? "col-span-3 py-1 px-1 text-xs" : "col-span-2  py-2 px-3 text-base"
        }  h-fit `}
      >
        {number}
      </p>
      {!isSmall && (
        <div className="col-span-1 flex flex-col items-center  h-fit">
          <Image src="/uzbekistan-flag-icon.svg" alt="uzb-flag" width={16} height={16} />
          <p className="text-xs">UZ</p>
        </div>
      )}
    </div>
  );
};
