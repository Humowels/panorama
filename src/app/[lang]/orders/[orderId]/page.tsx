import getQueryClient from "@/react-query/get-query-client";
import { ICommonProps } from "../../layout";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/react-query/hydrate-client";
import { OrderPage } from "../../../../components/order_page/order_page";
import { orderQueryFn } from "@/react-query/queries/orders.query";

export default async function Order({ params: { orderId } }: ICommonProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["car-wash", "product", orderId],
    queryFn: () => orderQueryFn(orderId),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div className="bg-service_bg min-h-screen">
        <OrderPage orderId={orderId} />
      </div>
    </Hydrate>
  );
}
