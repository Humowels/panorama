"use client";
import { IProduct } from "@/lib/interfaces/product.interface";
import { CheckIcon, PlusIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useLocaleContext } from "@/context/locale.context";
import Link from "next/link";
import { parseNumber, priceFormatter } from "@/lib/utils";
import { useCafeCartContext } from "@/context/cafe-cart.context";

interface IProps {
  product: IProduct;
}

export const Product = ({ product }: IProps) => {
  const { t, lang } = useLocaleContext();
  const { addItem, getItem, removeItem } = useCafeCartContext();
  const hasItem = getItem(product.variants[0].id);
  const startingPrice = product.variants.sort(
    (a, b) => parseNumber(a.price) - parseNumber(b.price),
  )[0].price;

  return (
    <div className="flex flex-col items-center justify-center p-3 border relative">
      <div className="flex justify-end w-full">
        {Boolean(hasItem) ? (
          <div
            onClick={removeItem.bind(null, { ...product.variants[0], productId: product.id })}
            className="w-8 h-8 cursor-pointer flex items-center justify-center border-2 bg-primary text-white rounded-full"
          >
            <CheckIcon width={24} />
          </div>
        ) : (
          <div
            onClick={addItem.bind(null, { ...product.variants[0], productId: product.id })}
            className="w-8 h-8 cursor-pointer flex items-center justify-center border-2 rounded-full"
          >
            <PlusIcon width={24} />
          </div>
        )}
      </div>

      <Link href={`/${lang}/service/cafe/${product.id}`} className="text-center mt-3 font-semibold">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={150}
          height={200}
          className="mx-auto w-[150px] h-[150px] object-cover rounded-md"
        />
        <p className="line-clamp-2 mt-2">{product.title}</p>
        <p>
          {t("cafe.starting_price", {
            price: priceFormatter(startingPrice),
          })}
        </p>
      </Link>
    </div>
  );
};
