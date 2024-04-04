export enum OrderStatus {
  All = "ALL",
  New = "Новый",
  Success = "Принят",
  Processed = "Обработан",
  Assembled = "Собран",
  Cancelled = "Отменен",
  Delivered = "Доставлен",
  Delivering = "Доставляется",
}

export enum FinancialStatus {
  Pending = "pending",
  Paid = "paid",
  Refunded = "refunded",
  Voided = "voided",
}
