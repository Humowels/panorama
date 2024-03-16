"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo } from "react";
import { useLocalStorage } from "react-use";
import { IProductVariant } from "@/lib/interfaces/product.interface";
import { ICafeCart, ICafeCartItem } from "@/lib/interfaces/cart.interface";
import { CheckoutButton } from "@/components/cafe/checkout-button";
import { parseNumber } from "@/lib/utils";

interface ICafeCartContext {
  addItem: (variant: IProductVariant) => void;
  incrementItem: (variant: IProductVariant) => void;
  decrementItem: (variant: IProductVariant) => void;
  removeItem: (variant: IProductVariant) => void;
  clearCart: () => void;
  cafeCart?: ICafeCart;
  setCafeCart: Dispatch<SetStateAction<ICafeCart | undefined>>;
  getItem: (id: number) => ICafeCartItem | undefined;
}

const CafeCartContext = createContext<ICafeCartContext | null>(null);

export const useCafeCartContext = () => {
  const context = useContext(CafeCartContext);

  if (!context) throw Error("Context must be used within Provider");

  return context;
};

interface IProps {
  children: ReactNode;
}

export const cartInitialState: ICafeCart = {
  totalPrice: 0,
  items: [],
};

export const CafeCartContextProvider = ({ children }: IProps) => {
  const [cafeCart, setCafeCart] = useLocalStorage<ICafeCart>("cafe-cart", cartInitialState);
  console.log({ cafeCart });
  const addItem = (variant: IProductVariant) => {
    const hasItem = Boolean(getItem(variant.id));

    console.log({ variant });
    if (hasItem) {
      return incrementItem(variant);
    }
    if (cafeCart) {
      setCafeCart({
        ...cafeCart,
        items: [...cafeCart.items, { ...variant, quantity: 1 }],
        totalPrice: cafeCart.totalPrice + parseNumber(variant.price),
      });
    }
  };

  const decrementItem = (variant: IProductVariant) => {
    const { id, price } = variant;

    if (cafeCart) {
      const items = cafeCart.items
        .map((item) => {
          if (item.id === id) {
            return item.quantity === 1 ? null : { ...item, quantity: item.quantity - 1 };
          }

          return item;
        })
        .filter((item) => Boolean(item)) as ICafeCartItem[];

      setCafeCart({
        ...cafeCart,
        totalPrice: cafeCart.totalPrice - parseNumber(price),
        items,
      });
    }
  };

  const incrementItem = (variant: IProductVariant) => {
    const { id, price } = variant;

    if (cafeCart) {
      const items = cafeCart.items.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCafeCart({
        ...cafeCart,
        totalPrice: cafeCart.totalPrice + parseNumber(price),
        items,
      });
    }
  };

  const removeItem = (variant: IProductVariant) => {
    if (!cafeCart) return;
    let totalPrice = cafeCart.totalPrice;

    const items = cafeCart.items.filter((item) => {
      if (item.id === variant.id) {
        totalPrice -= item.quantity * parseNumber(item.price);

        return false;
      }

      return true;
    });
    setCafeCart({
      ...cafeCart,
      items,
      totalPrice,
    });
  };

  const clearCart = () => {
    setCafeCart(cartInitialState);
  };

  const getItem = (id: number) => {
    return cafeCart?.items.find((item) => item.id === id);
  };

  const value: ICafeCartContext = useMemo(() => {
    return {
      cafeCart,
      setCafeCart,
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearCart,
      getItem,
    };
  }, [cafeCart]);

  return (
    <CafeCartContext.Provider value={value}>
      {children}
      {cafeCart?.items?.length ? <CheckoutButton /> : null}
    </CafeCartContext.Provider>
  );
};
