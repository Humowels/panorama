"use client";
import { IProductVariant } from "@/lib/interfaces/product.interface";
import { useLocaleContext } from "@/context/locale.context";
import { CheckIcon } from "@heroicons/react/outline";
import { priceFormatter } from "@/lib/utils";

interface IProps {
  productVariant: IProductVariant;
}

export const ProductVariantSelectItem = ({ productVariant }: IProps) => {
  const { t } = useLocaleContext();
  const isActive = productVariant.variantId === 1;
  return (
    <div className="py-4 px-6 border-y flex items-center gap-3">
      <p className="flex-grow">{productVariant.variantName}</p>
      <p className="text-gray-400">
        {priceFormatter(productVariant.variantPrice)} {t("common.currency")}
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
