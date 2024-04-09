import { ReactNode, SVGProps } from "react";

export interface ICreateOrder {
  shipping_address?: IAddress;
  line_items: ILineItem[];
  gateway: string;
  shipping_line: string;
  note?: string;
  delivery_date?: string;
  name?: string;
  phone?: string;
}

export interface ILineItem {
  product_id: number;
  variant_id: number;
  quantity: number;
  price: string;
}

export interface IAddress {
  id?: number;
  address: string;
  address2?: string;
  city: string;
  lat: number;
  long: number;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface IPaymentMethod {
  title: string;
  icon: string;
}
