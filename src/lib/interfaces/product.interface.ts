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
}

interface IProductVariantImage {
  id: string;
  src: string;
}

export interface IPaginatedItem<T> {
  data: T[];
}
