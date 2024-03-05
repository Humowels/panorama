import { IProductVariant } from "@/lib/interfaces/product.interface";
import { useLocaleContext } from "@/context/locale.context";
import { CheckIcon } from "@heroicons/react/outline";
import { priceFormatter } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";

interface IProps {
  productVariant: IProductVariant;
  isActive: boolean;
  onChange: Dispatch<SetStateAction<IProductVariant>>;
}

export const ProductVariantSelectItem = ({ productVariant, onChange, isActive }: IProps) => {
  const { t } = useLocaleContext();

  return (
    <div
      className="py-4 px-6 border-y flex items-center gap-3 cursor-pointer"
      onClick={onChange.bind(null, productVariant)}
    >
      <p className="flex-grow">{productVariant.title}</p>
      <p className="text-gray-400">
        {priceFormatter(productVariant.price)} {t("common.currency")}
      </p>
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
