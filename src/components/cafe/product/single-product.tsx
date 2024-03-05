"use client";

import { useRouter } from "next/navigation";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { ProductVariantSelectItem } from "@/components/cafe/product/product-variant-select-item";
import { useState } from "react";
import { IProduct, IProductVariant } from "@/lib/interfaces/product.interface";
import { Button } from "@/components/ui/button";
import { useLocaleContext } from "@/context/locale.context";
import { useCafeCartContext } from "@/context/cafe-cart.context";
import { useQuery } from "@tanstack/react-query";
import { getProductByIdQueryFn } from "@/react-query/queries/products.query";
import { ProductPageSkeleton } from "@/components/skeletons/product-page-skeleton";

interface IProps {
  productId?: string;
}

export const SingleProduct = ({ productId }: IProps) => {
  const { t } = useLocaleContext();
  const router = useRouter();
  const { addItem } = useCafeCartContext();

  const { data: product, isLoading } = useQuery<IProduct>({
    queryKey: ["product", productId],
    queryFn: () => getProductByIdQueryFn(productId as string),
  });

  const [selectedVariant, setSelectedVariant] = useState<IProductVariant>(
    product?.variants[0] as IProductVariant,
  );

  if (isLoading) {
    return <ProductPageSkeleton />;
  }

  if (!product) {
    return null;
  }

  const productsVariants = product.variants.map((variant) => (
    <ProductVariantSelectItem
      key={variant.id}
      productVariant={variant}
      onChange={setSelectedVariant}
      isActive={variant.id === selectedVariant?.id}
    />
  ));

  return (
    <div className="absolute overflow-y-scroll min-h-screen w-full left-0 top-0 bg-service_bg z-10 flex flex-col pb-3">
      <div className="flex-grow">
        <div className="w-full flex justify-end p-5">
          <div
            onClick={router.back}
            className="flex cursor-pointer items-center justify-center w-10 h-10 bg-primary rounded-full"
          >
            <XIcon width={24} height={24} className="text-white" />
          </div>
        </div>
        <Image
          src={product?.images[0].src}
          alt={product.title}
          width={350}
          height={400}
          className="rounded-xl mx-auto"
        />
        <p className="px-6 font-bold text-2xl my-5">{product.title}</p>
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
