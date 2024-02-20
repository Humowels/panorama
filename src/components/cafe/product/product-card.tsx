"use client";
import { IProduct } from "@/lib/interfaces/product.interface";
import { CheckIcon, PlusIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useLocaleContext } from "@/context/locale.context";
import Link from "next/link";
import { priceFormatter } from "@/lib/utils";
import { useCafeCartContext } from "@/context/cafe-cart.context";

interface IProps {
  product: IProduct;
}

export const Product = ({ product }: IProps) => {
  const { t, lang } = useLocaleContext();
  const { addItem, getItem, removeItem } = useCafeCartContext();
  const hasItem = getItem(product.variants[0].variantId);
  const startingPrice = product.variants.sort((a, b) => a.variantPrice - b.variantPrice)[0]
    .variantPrice;
  return (
    <div className="flex flex-col items-center justify-center p-3 border relative">
      <div className="flex justify-end w-full">
        {Boolean(hasItem) ? (
          <div
            onClick={removeItem.bind(null, product.variants[0])}
            className="w-8 h-8 cursor-pointer flex items-center justify-center border-2 bg-primary text-white rounded-full"
          >
            <CheckIcon width={24} />
          </div>
        ) : (
          <div
            onClick={addItem.bind(null, product.variants[0])}
            className="w-8 h-8 cursor-pointer flex items-center justify-center border-2 rounded-full"
          >
            <PlusIcon width={24} />
          </div>
        )}
      </div>

      <Link href={`/${lang}/service/cafe/${product.id}`} className="text-center mt-3 font-semibold">
        <Image src={product.productImage} alt={product.productName} width={200} height={200} />
        {product.productName}
        <p>
          {t("cafe.starting_price", {
            price: priceFormatter(startingPrice),
          })}
        </p>
      </Link>
    </div>
  );
};
