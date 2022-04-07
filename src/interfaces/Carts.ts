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
      promoterName: string;
      itemDescription: string;
      itemURL: string;
      itemName: string;
      promoterId: string;
      price: number;
  }
  