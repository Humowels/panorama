"use client";

import { useParams, useRouter } from "next/navigation";
import { productMock } from "@/lib/mocks/products.mock";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { ProductVariantSelectItem } from "@/components/cafe/product/product-variant-select-item";
import { useState } from "react";
import { IProductVariant } from "@/lib/interfaces/product.interface";
import { Button } from "@/components/ui/button";
import { useLocaleContext } from "@/context/locale.context";
import { useCafeCartContext } from "@/context/cafe-cart.context";
import { add } from "unload";

export const SingleProduct = () => {
  const { t } = useLocaleContext();
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCafeCartContext();
  const productId = params.productId as string;
  const product = productMock.find((product) => product.id === parseInt(productId));
  const [selectedVariant, setSelectedVariant] = useState<IProductVariant>(
    product?.variants[0] as IProductVariant,
  );

  if (!product) {
    return null;
  }

  const productsVariants = product.variants.map((variant) => (
    <ProductVariantSelectItem
      key={variant.variantId}
      productVariant={variant}
      onChange={setSelectedVariant}
      isActive={variant.variantId === selectedVariant.variantId}
    />
  ));

  return (
    <div className="absolute w-full h-full left-0 top-0 bg-service_bg z-10 flex flex-col pb-3">
      <div className="flex-grow">
        <div className="w-full flex justify-end p-5">
          <div
            onClick={router.back}
            className="flex cursor-pointer items-center justify-center w-10 h-10 bg-primary rounded-full"
          >
            <XIcon width={24} height={24} className="text-white" />
          </div>
        </div>
        <Image src={product?.productImage} alt={product.productName} width={400} height={500} />
        <p className="px-6 font-bold text-2xl my-5">{product.productName}</p>
        <div className="[&>*:last-child]:border-t-0">{productsVariants}</div>
      </div>
      <Button
        onClick={addItem.bind(null, selectedVariant)}
        className="bg-primary max-w-[350px] w-full h-14 text-white mx-auto block sticky bottom-0"
      >
        {t("cafe.add")}
      </Button>
    </div>
  );
};
