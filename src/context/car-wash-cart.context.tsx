"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { useLocalStorage } from "react-use";
import { ICafeCart } from "@/lib/interfaces/cart.interface";
import { cartInitialState } from "@/context/cafe-cart.context";
import { IProduct } from "@/lib/interfaces/product.interface";
import { ICreateOrder } from "@/lib/interfaces/checkout.interface";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { orderCreateMutationFn } from "@/react-query/mutation/checkout.mutation";
import { useParams, useRouter } from "next/navigation";

interface ICarWashCartContext {
  carWashCart?: ICafeCart;
  setCarWashCart: Dispatch<SetStateAction<ICafeCart | undefined>>;
  selectedService: IProduct | null;
  setSelectedService: Dispatch<SetStateAction<IProduct | null>>;
  createOrder: () => Promise<void>;
  createOrderMutation: UseMutationResult<any, Error, any>;
}

const CarWashContext = createContext<ICarWashCartContext | null>(null);

export const useCarWashContext = () => {
  const context = useContext(CarWashContext);
  if (!context) throw Error("Context should be used within CarWashContextProvider !");

  return context;
};

interface IProps {
  children: ReactNode;
}

export const CarWashContextProvider = ({ children }: IProps) => {
  const { carId } = useParams();

  const [carWashCart, setCarWashCart] = useLocalStorage<ICafeCart>(
    "panorama-carwash-cart",
    cartInitialState,
  );
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<IProduct | null>(null);
  const createOrderMutation = useMutation({
    mutationFn: (body: ICreateOrder) => orderCreateMutationFn(body),
    onSuccess: () => {
      setCarWashCart(cartInitialState);
      router.push("order-success");
    },
  });

  const createOrder = async () => {
    const items = carWashCart?.items;

    if (!items) return;

    const body: ICreateOrder = {
      shipping_address: {
        address: "panorama",
        lat: 0,
        long: 0,
        city: "moyka",
      },
      line_items: items.map((item) => ({
        product_id: item.productId,
        variant_id: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      shipping_line: "9b897b79-2ad0-4333-a5ad-c6c4acaa12db",
      gateway: "Наличными",
      note: carId.toString().replaceAll("%20", " "),
    };
    await createOrderMutation.mutateAsync(body);
  };

  const value = useMemo<ICarWashCartContext>(() => {
    return {
      carWashCart,
      setCarWashCart,
      selectedService,
      setSelectedService,
      createOrder,
      createOrderMutation,
    };
  }, [carWashCart, setCarWashCart, selectedService, setSelectedService, createOrderMutation]);

  return <CarWashContext.Provider value={value}>{children}</CarWashContext.Provider>;
};
