import { TOrderStatuses } from "@/components/orders/order-status/order-status";
import { FinancialStatus } from "../enums/orders.enum";

export interface IOrder {
  createdAt: string;
  id: number;
  lineItems: IOrderLineItems[];
  number: string;
  status: TOrderStatuses;
  totalPrice: string;
  note?: string;
  financialStatus: FinancialStatus;
}

export interface IOrderLineItems {
  id: number;
  imageUrl: string;
  price: string;
  quantity: number;
  title: string;
  variantTitle: string;
}
