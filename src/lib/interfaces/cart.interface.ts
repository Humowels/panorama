import { IProductVariant } from "@/lib/interfaces/product.interface";

export interface ICafeCartItem extends IProductVariant {
  quantity: number;
}

export interface ICafeCart {
  totalPrice: number;
  items: ICafeCartItem[];
}
