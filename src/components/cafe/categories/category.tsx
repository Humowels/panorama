"use client";

import { Product } from "@/components/cafe/product/product-card";
import { productMock } from "@/lib/mocks/products.mock";

interface IProps {
  categoryName: string;
}

export const Category = ({ categoryName }: IProps) => {
  return (
    <div>
      <p className="font-semibold my-3">{categoryName}</p>
      <div className="grid grid-cols-2 gap-3">
        {productMock.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
