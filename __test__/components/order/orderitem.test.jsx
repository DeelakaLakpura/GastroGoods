// OrderItem.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderItem from '@/app/order/[orderId]/OrderItem.tsx';

// Mock the Image component to avoid errors since it's a Next.js component.
jest.mock('next/image', () => ({ src, alt }) => (
    <img src={src} alt={alt} />
));

const mockItem = {
  selectedImg: {
    image: 'mock-image-url',
    color: 'mock-color',
  },
  name: 'Mock Product',
  price: 10.99,
  quantity: 2,
};

describe('OrderItem component', () => {
  test('renders OrderItem correctly', () => {
    const { getByText } = render(<OrderItem item={mockItem} />);

    // Check if the component renders the expected content
    expect(getByText('Mock Product')).toBeInTheDocument();
    expect(getByText('mock-color')).toBeInTheDocument();
    expect(getByText('$21.98')).toBeInTheDocument();
  });
});
