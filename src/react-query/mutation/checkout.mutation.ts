import { getBaseUrl } from "@/lib/utils";
import fetcher from "@/react-query/fetcher";
import { ICreateOrder } from "@/lib/interfaces/checkout.interface";

export const orderCreateMutationFn = (createOrder: ICreateOrder) =>
  fetcher(`${getBaseUrl()}/orders`, {
    method: "POST",
    body: JSON.stringify(createOrder),
  }).then((res) => {
    if (res.ok) {
      return res.json().then((res) => res.data);
    }
    return Promise.reject(res);
  });
