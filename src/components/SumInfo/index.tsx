import React from 'react';

import { useCart } from '../../hooks/useCart';
import { Container } from './styles';
import EmptyMessage from '../../components/EmptyMessage';
import formatCurrency from '../../helper/formatCurrency';

export default function SumInfo() {
  const { cartItems, sumInfo } = useCart();

  return (
    <Container>
      {cartItems?.length > 0 ? (
        <>
          <li>
          Products <span>{formatCurrency(sumInfo.itemsSubTotal)}</span>
          </li>
          <li>
          front <span>{formatCurrency(sumInfo.shippingTotal)}</span>
          </li>
          <li className="discount">
          Discount <span>-{formatCurrency(sumInfo.itemsDiscount)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(sumInfo.itemsTotal)}</span>
          </li>
        </>
      ) : (
        <EmptyMessage />
      )}
    </Container>
  );
}
