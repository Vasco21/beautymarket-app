import React, { useEffect, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { ProductList, StockCounter } from './styles';
import api from '../../services/api';
import { Container  } from '../AboutUs/styles';
import { useCart } from '../../hooks/useCart';
import { Cart, CartItem } from '../../interfaces/Cart';
import Header from './components/Header';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import formatCurrency from '../../helper/formatCurrency';
import cartMapper from '../../mapper/cart-mapper';
import { setToLocalStorage } from '../../helper/local-storage';
import { VASCO_NA_WEB_ALL_ITEMS } from '../../constants/local-storage';
import { API_URL_CART } from '../../constants/api-url';
import NewItems from '../LooksItems/index';




interface CartItemsQuantity {
  [key: string]: number;
}

export default function Home() {
  const { cartItems, stockquantity, setSumInfo, sumInfo, addProduct, isPurchaseConfirm } =
    useCart();
  const [allProducts, setAllProducts] = useState<CartItem[]>([] as CartItem[]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Cart>(API_URL_CART);

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

  const cartItemsQuantity = cartItems.reduce((itemsQuantity, item) => {
    const itemsQuantityObj = { ...itemsQuantity };
    itemsQuantityObj[item.product.sku] = item.quantity;
    return itemsQuantityObj;
  }, {} as CartItemsQuantity);

  return (
    <div className="buttonBtn">
      <Header />
      <NewItems/>
      <h1>New Feshion</h1>
      <ProductList>
        {allProducts.map((item: CartItem) => (
          <li key={item.product.sku}>
            <img src={item.product.imageObjects[0].small} alt={item.product.sku} />
            <h1>{item.product.name}</h1>
            <p>{item.product.description}</p>
            <span>{formatCurrency(item.product.priceSpecification.price)}</span>

            <Button 
              onClick={() => addProduct(item.product.sku)}
              data-testid="add-item-button"
              isProgressive={false}
            >
              <div className="icon" data-testid="cart-item-quantity" >
                <MdShoppingBasket size={20} color="#fff" />
                {cartItemsQuantity[item.product.sku] || 0}
              </div>
              <span color="black">ADD TO CART</span>
            </Button>

            <StockCounter>
              Remain {stockquantity - (cartItemsQuantity[item.product.sku] || 0)} in stock
            </StockCounter>
          </li>
        ))}
      </ProductList>
      <Container>
        <button   type="button" className="custom__button" color="Blue"><a href="looks">
            <p>More...</p>
          </a>
        </button>
      </Container>

      {allProducts?.length === 0 && <Loading />}
    </div>
  );
}