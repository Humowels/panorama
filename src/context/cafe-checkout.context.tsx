import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { orderCreateMutationFn } from "@/react-query/mutation/checkout.mutation";
import { IAddress, ICreateOrder, IPaymentMethod } from "@/lib/interfaces/checkout.interface";
import { useCafeCartContext } from "@/context/cafe-cart.context";
import { useRouter } from "next/navigation";
import { locationsMock } from "@/lib/mocks/address.mock";
import { paymentMethodsMock } from "@/lib/mocks/payment-methods.mock";
import { IShippingMethod } from "@/lib/interfaces/shipping-methods.interface";

interface ICafeCheckoutContext {
  createOrder: () => Promise<any>;
  selectedAddress: IAddress;
  setSelectedAddress: Dispatch<SetStateAction<IAddress>>;
  selectedPaymentMethod: IPaymentMethod;
  setSelectedPaymentMethod: Dispatch<SetStateAction<IPaymentMethod>>;
  selectedShippingMethod: IShippingMethod | null;
  setSelectedShippingMethod: Dispatch<SetStateAction<IShippingMethod | null>>;
}

export const CafeCheckoutContext = createContext<ICafeCheckoutContext | null>(null);

export const useCafeCheckoutContext = () => {
  const ctx = useContext(CafeCheckoutContext);
  if (!ctx) {
    throw Error("Context must be used within CafeCheckoutProvider");
  }

  return ctx;
};

interface IProps {
  children: ReactNode;
}

export const CafeCheckoutContextProvider = ({ children }: IProps) => {
  const [selectedAddress, setSelectedAddress] = useState<IAddress>(locationsMock[0]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<IPaymentMethod>(
    paymentMethodsMock[0],
  );
  const router = useRouter();
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<IShippingMethod | null>(
    null,
  );
  const createOrderMutation = useMutation({
    mutationFn: (body: ICreateOrder) => orderCreateMutationFn(body),
    onSuccess: () => {
      router.push("order-success");
    },
  });

  const { cafeCart } = useCafeCartContext();

  const createOrder = async () => {
    const items = cafeCart?.items;

    if (!items) return;

    const body: ICreateOrder = {
      shipping_address: {
        address: selectedAddress.address,
        lat: 0,
        long: 0,
        city: selectedAddress.address,
      },
      line_items: items.map((item) => ({
        product_id: item.productId,
        variant_id: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      shipping_line: selectedShippingMethod?.title as string,
      gateway: selectedPaymentMethod.title,
    };

    await createOrderMutation.mutateAsync(body);
  };

  const value = useMemo<ICafeCheckoutContext>(() => {
    return {
      createOrder,
      selectedAddress,
      setSelectedAddress,
      selectedPaymentMethod,
      setSelectedPaymentMethod,
      selectedShippingMethod,
      setSelectedShippingMethod,
    };
  }, [selectedAddress, selectedAddress, selectedShippingMethod, selectedPaymentMethod]);

  return <CafeCheckoutContext.Provider value={value}>{children}</CafeCheckoutContext.Provider>;
};
