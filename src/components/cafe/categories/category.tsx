"use client";

import { Product } from "@/components/cafe/product/product-card";
import { IProduct } from "@/lib/interfaces/product.interface";
import { ProductsLoader } from "@/components/skeletons/products-loader";

interface IProps {
  categoryName: string;
  products?: IProduct[];
  isLoading?: boolean;
}

export const Category = ({ categoryName, products, isLoading }: IProps) => {
  if (isLoading) {
    return <ProductsLoader />;
  }

  if (!products?.length) {
    return null;
  }

  return (
    <div>
      <p className="font-semibold my-3">{categoryName}</p>
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
