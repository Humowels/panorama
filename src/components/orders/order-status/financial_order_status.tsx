"use client";

import { useLocaleContext } from "@/context/locale.context";
import { FinancialStatus } from "@/lib/enums/orders.enum";
import { useCallback } from "react";

interface IProps {
  status: FinancialStatus;
}

export const FinancialOrderStatus = ({ status }: IProps) => {
  const { t } = useLocaleContext();

  const getFinancialStatus = useCallback(() => {
    switch (status) {
      case FinancialStatus.Paid:
        return <p className="text-telegram-hint">{t("order.paid")}</p>;
      case FinancialStatus.Pending:
        return <p className="text-telegram-hint">{t("order.pending")}</p>;

      default:
        return <p className="text-telegram-hint">{t("order.voided")}</p>;
    }
  }, [status]);

  return getFinancialStatus();
};
