export interface IProduct {
  id: number;
  productImage: string;
  productName: string;
  variants: IProductVariant[];
}

export interface IProductVariant {
  variantId: number;
  variantName: string;
  variantPrice: number;
}
