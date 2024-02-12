"use client";
import { IProduct } from "@/lib/interfaces/product.interface";
import { PlusIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useLocaleContext } from "@/context/locale.context";
import Link from "next/link";
import { priceFormatter } from "@/lib/utils";

interface IProps {
  product: IProduct;
}

export const Product = ({ product }: IProps) => {
  const { t, lang } = useLocaleContext();
  const startingPrice = product.variants.sort((a, b) => a.variantPrice - b.variantPrice)[0]
    .variantPrice;
  return (
    <div className="flex flex-col items-center justify-center p-3 border relative">
      <div className="flex justify-end w-full">
        <div className="w-8 h-8 cursor-pointer flex items-center justify-center border-2 rounded-full">
          <PlusIcon width={24} />
        </div>
      </div>

      <Image src={product.productImage} alt={product.productName} width={200} height={200} />
      <Link href={`/${lang}/service/cafe/${product.id}`} className="text-center mt-3 font-semibold">
        {product.productName}
      </Link>
      <p>
        {t("cafe.starting_price", {
          price: priceFormatter(startingPrice),
        })}
      </p>
    </div>
  );
};
