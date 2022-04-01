export interface Cart {
  id: string;
  items: CartItem[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

export interface CartItem {
  quantity: number;
  product: {
    sku: string;
    name: string;
    description: string;
    imageObjects: {
      small: string;
      medium: string;
    }[];
    priceSpecification: {
      sku: string;
      price: number;
      discount: number;
      
    };
  };
}