import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useRef,
  useEffect,
  SetStateAction,
  Dispatch
} from 'react';
import api from '../services/products';
import { Cart, CartItem } from '../interfaces/Carts';
import {
  VASCO_NA_WEB_ALL_ITEMS,
  VASCO_NA_WEB_CART_ITEMS,
  VASCO_NA_WEB_CREDIT_CARD,
  VASCO_NA_WEB_SUM_INFO
} from '../constants/local-storage';

import { API_URL_CARTS } from '../constants/api-url';
import {
  cleanLocalStorage,
  getFromLocalStorage,
  setToLocalStorage
} from '../helper/local-storage';
import { Focused } from 'react-credit-cards';
import { useToast } from '../hooks/useToast';

interface CartProviderProps {
  children: ReactNode;
}
interface UpdateItemQuantity {
  productSku: string;
  quantity: number;
}
interface CreditCardInfo {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focused: Focused;
}
interface SumInfo {
  itemsSubTotal: number;
  itemsDiscount: number;
  itemsTotal: number;
  shippingTotal: number;
}
interface CartContextDatas {
  sumInfo: SumInfo;
  setSumInfo: Dispatch<SetStateAction<SumInfo>>;
  creditCardInfo: CreditCardInfo;
  setCreditCardInfo: Dispatch<SetStateAction<CreditCardInfo>>;
  cartItems: CartItem[];
  addProduct: (productSku: string) => Promise<void>;
  removeProduct: (productSku: string) => void;
  updateItemQuantity: ({ productSku, quantity }: UpdateItemQuantity) => void;
  stockquantity: number;
  isPurchaseConfirm: boolean;
  setIsPurchaseConfirm: Dispatch<SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextDatas>({} as CartContextDatas);

export function CartProviders({ children }: CartProviderProps): JSX.Element {
  const cartItemsFromLocalStorage = getFromLocalStorage(VASCO_NA_WEB_CART_ITEMS);
  const sumInfoFromLocalStorage = getFromLocalStorage(VASCO_NA_WEB_SUM_INFO);
  const creditCardFromStorage = getFromLocalStorage(VASCO_NA_WEB_CREDIT_CARD);

  const [cartItems, setCartItems] = useState<CartItem[]>(cartItemsFromLocalStorage || []);
  const [sumInfo, setSumInfo] = useState<SumInfo>(sumInfoFromLocalStorage || {});
  const [creditCardInfo, setCreditCardInfo] = useState<CreditCardInfo>(creditCardFromStorage || {});
  const [isPurchaseConfirm, setIsPurchaseConfirm] = useState(false);

  const prevCartRef = useRef<CartItem[]>();
  const cartPreviousValue = prevCartRef.current ?? cartItems;
  const { addToast } = useToast();
  const stockquantity = 4;

  useEffect(() => {
    prevCartRef.current = cartItems;
  });

  useEffect(() => {
    if (cartPreviousValue !== cartItems) {
      setToLocalStorage(VASCO_NA_WEB_CART_ITEMS, cartItems);
    }
  }, [cartPreviousValue, cartItems]);

  const addProduct = async (productSku: string) => {
    try {
      const updatedCartItems = [...cartItems];

      const itemAlreadyInCart = updatedCartItems.find((item) => item.itemName === productSku);
      const quantitySum = itemAlreadyInCart ? itemAlreadyInCart.quantity : 0;
      const currentItemQuantity = quantitySum + 1;

     
      if (currentItemQuantity > stockquantity) {
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Quantity ordered out of stock'
        });

        return;
      }


      if (itemAlreadyInCart) {
        itemAlreadyInCart.quantity = quantitySum + 1;
      }

      else {
        const response = await api.get<Cart>(API_URL_CARTS);
        const newItem = response.data.items.find(
          (item: CartItem) => item.itemName === productSku
        );
        if (newItem) updatedCartItems.push(newItem);

        addToast({
          type: 'success',
          title: 'Sucesso!',
          description: `"${newItem?.itemName}" has been added to cart`
        });
      }

      setCartItems(updatedCartItems);
      setSumInfoItems(updatedCartItems);
    } catch {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Error trying to add item to cart'
      });
    }
  };

  const updateItemQuantity = ({ productSku, quantity }: UpdateItemQuantity) => {
    try {
      if (quantity <= 0) return;

      if (quantity > stockquantity) {
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Ordered quantity out of stock'
        });
        return;
      }

      const updatedCartItems = [...cartItems];
      const itemAlreadyInCart = updatedCartItems.find((item) => item.itemName === productSku);

      if (itemAlreadyInCart) {
        itemAlreadyInCart.quantity = quantity;

        setCartItems(updatedCartItems);
        setSumInfoItems(updatedCartItems);
      }
      //
      else throw Error();
    } catch {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Error when trying to change quantitye'
      });
    }
  };

  const removeProduct = (productSku: string) => {
    try {
      const updatedCartItems = [...cartItems];
      const productIndex = updatedCartItems.findIndex((item) => item.itemName === productSku);

      if (productIndex >= 0) {
        updatedCartItems.splice(productIndex, 1);
        setCartItems(updatedCartItems);
        setSumInfoItems(updatedCartItems);

        if (updatedCartItems?.length === 0) cleanLocalStorage();
      }
      //
      else throw Error();
    } catch {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Error trying remove item'
      });
    }
  };

  const setSumInfoItems = (updatedCartItems: CartItem[]) => {
    const cartWithSubtotal = updatedCartItems.map((item) => ({
      ...item,
      subTotal: item.price * item.quantity,
    }));

    let itemsSubTotal = 0;

    cartWithSubtotal.forEach((item) => {
      itemsSubTotal += item.subTotal;
    });

    const itemsTotal = itemsSubTotal ;

    const sumInfoObject = {
      ...sumInfo,
      itemsSubTotal,
      itemsTotal
    };

    setSumInfo(sumInfoObject);
    setToLocalStorage(VASCO_NA_WEB_SUM_INFO, sumInfoObject);
  };

  return (
    <CartContext.Provider
      value={{
        sumInfo,
        setSumInfo,
        creditCardInfo,
        setCreditCardInfo,
        cartItems,
        addProduct,
        removeProduct,
        updateItemQuantity,
        stockquantity,
        isPurchaseConfirm,
        setIsPurchaseConfirm
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextDatas {
  const context = useContext(CartContext);
  return context;
}
