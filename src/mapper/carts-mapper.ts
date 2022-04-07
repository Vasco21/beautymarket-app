import { Cart, CartItem } from '../interfaces/Carts';

export default function cartMapper(cart: Cart) {
  const itemsWrapper: CartItem[]= []
  Object.values(cart).forEach((value) => {
  itemsWrapper.push(
     {
      promoterId:value.promoterId,
      itemName:value.itemName,
      itemURL:value.itemURL,
      price:value.price,
      itemDescription:value.itemDescription,
      promoterName:value.promoterName,
      quantity:0,
    }
  )
  });

  const dataWrapper = {
    id: cart.id,
    shippingTotal: cart.shippingTotal,
    items: itemsWrapper
  };

  return dataWrapper;
}
