export interface IProduct {
  id: number;
  imageUrl: string;
  images: IProductVariantImage[];
  title: string;
  variants: IProductVariant[];
  price: string;
}

export interface IProductVariant {
  id: number;
  title: string;
  price: string;
  productId: number;
}

interface IProductVariantImage {
  id: string;
  src: string;
}

export interface IPaginatedItem<T> {
  data: T[];
}
