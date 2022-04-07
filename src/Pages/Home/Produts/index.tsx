import React, { useEffect, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';

import { ProductList, StockCounter } from './styles';
import api from '../../../services/products';

import { useCart } from '../../../hool/useCarts';
import { Cart, CartItem } from '../../../interfaces/Carts';
import Header from '../components/Header';
import Loading from '../../../components/Loading';
import Button from '../../../components/Button';
import formatCurrency from '../../../helper/formatCurrency';
import cartMapper from '../../../mapper/carts-mapper';
import { setToLocalStorage } from '../../../helper/local-storage';
import { VASCO_NA_WEB_ALL_ITEMS } from '../../../constants/local-storage';
import { API_URL_CARTS } from '../../../constants/api-url';
import Menu from '../../../components/Slider/sidebar'

interface CartItemsQuantity {
  [key: string]: number;
}

export default function Home() {
  const { cartItems, stockquantity, setSumInfo, sumInfo, addProduct, isPurchaseConfirm } =
    useCart();
  const [allProducts, setAllProducts] = useState<CartItem[]>([] as CartItem[]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Cart>(API_URL_CARTS);

      const cartWrapper = cartMapper(response.data);
      const { items, shippingTotal } = cartWrapper;

      setAllProducts(items);
      setSumInfo({ ...sumInfo, shippingTotal });
      setToLocalStorage(VASCO_NA_WEB_ALL_ITEMS, items);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    if (isPurchaseConfirm) {
      window.location.reload();
    }
  }, [isPurchaseConfirm]);

  // const cartItemsQuantity = cartItems.reduce((itemsQuantity, item) => {
  //   const itemsQuantityObj = { ...itemsQuantity };
  //   itemsQuantityObj[item.itemName] = item.quantity;
  //   return itemsQuantityObj;
  // }, {} as CartItemsQuantity);

  return (
    <>
      <Menu/>
      <Header />
      <ProductList>
        {allProducts.map((item: CartItem) => (
          <li key={item.itemName}>
            <img src={item.itemURL} alt={item.itemName} />
            <h3>{item.itemName}</h3>
            <span>{formatCurrency(item.price)}</span>

            <Button
              onClick={() => addProduct(item.itemName)}
              data-testid="add-item-button"
              isProgressive={false}
            >
              <div className="icon" data-testid="cart-item-quantity">
                <MdShoppingBasket size={20} color="#fff" />
                {/* {cartItemsQuantity[item.itemName] || 0} */}
              </div>
              <span>ADD TO CART</span>
            </Button>

            <StockCounter>
              {/* Remain {stockquantity - (cartItemsQuantity[item.itemName] || 0)} in stock */}
            </StockCounter>
          </li>
        ))}
      </ProductList>

      {allProducts?.length === 0 && <Loading />}
    </>
  );
}

