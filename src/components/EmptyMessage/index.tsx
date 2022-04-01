import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function EmptyMessage() {
  return (
    <Container data-testid="empty-message">
      There are no items in the cart
      <br />
      <Link to="/">See Products</Link>
    </Container>
  );
}
