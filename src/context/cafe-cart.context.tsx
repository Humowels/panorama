"use client";

import { createContext, ReactNode, useContext, useMemo } from "react";
import { useLocalStorage } from "react-use";
import { IProductVariant } from "@/lib/interfaces/product.interface";
import { ICafeCart, ICafeCartItem } from "@/lib/interfaces/cart.interface";

interface ICafeCartContext {
  addItem: (variant: IProductVariant) => void;
  incrementItem: (variant: IProductVariant) => void;
  decrementItem: (variant: IProductVariant) => void;
  removeItem: (variant: IProductVariant) => void;
  clearCart: () => void;
  cafeCart?: ICafeCart;
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

const cartInitialState: ICafeCart = {
  totalPrice: 0,
  items: [],
};

export const CafeCartContextProvider = ({ children }: IProps) => {
  const [cafeCart, setCafeCart] = useLocalStorage<ICafeCart>("cafe-cart", cartInitialState);

  const addItem = (variant: IProductVariant) => {
    if (cafeCart) {
      setCafeCart({
        ...cafeCart,
        items: [...cafeCart.items, { ...variant, quantity: 1 }],
        totalPrice: cafeCart.totalPrice + variant.variantPrice,
      });
    }
  };

  const decrementItem = (variant: IProductVariant) => {
    const { variantId, variantPrice } = variant;

    if (cafeCart) {
      const items = cafeCart.items
        .map((item) => {
          if (item.variantId === variantId) {
            return item.quantity === 1 ? null : { ...item, quantity: item.quantity - 1 };
          }

          return item;
        })
        .filter((item) => Boolean(item)) as ICafeCartItem[];

      setCafeCart({
        ...cafeCart,
        totalPrice: cafeCart.totalPrice - variantPrice,
        items,
      });
    }
  };

  const incrementItem = (variant: IProductVariant) => {
    const { variantId, variantPrice } = variant;

    if (cafeCart) {
      const items = cafeCart.items.map((item) => {
        if (variantId === item.variantId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCafeCart({
        ...cafeCart,
        totalPrice: cafeCart.totalPrice + variantPrice,
        items,
      });
    }
  };

  const removeItem = (variant: IProductVariant) => {
    if (!cafeCart) return;
    let totalPrice = cafeCart.totalPrice;

    const items = cafeCart.items.filter((item) => {
      if (item.variantId === variant.variantId) {
        totalPrice -= item.quantity * item.variantPrice;

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

  const value: ICafeCartContext = useMemo(() => {
    return {
      cafeCart,
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearCart,
    };
  }, [cafeCart]);

  return <CafeCartContext.Provider value={value}>{children}</CafeCartContext.Provider>;
};
