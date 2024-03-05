import { ProductCardSkeleton } from "@/components/skeletons/product-card-skeleton";

export const ProductsLoader = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-3">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
};
