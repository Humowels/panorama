import { TOrderStatuses } from "@/components/orders/order-status/order-status";

export interface IOrder {
  createdAt: string;
  id: number;
  lineItems: IOrderLineItems;
  number: string;
  status: TOrderStatuses;
  totalPrice: string;
}

export interface IOrderLineItems {
  id: number;
  imageUrl: string;
  price: string;
  quantity: number;
  title: string;
  variantTitle: string;
}
