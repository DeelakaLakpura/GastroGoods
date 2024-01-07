import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListRating from '@/app/product/[productId]/ListRating';

jest.mock('moment', () => () => ({ fromNow: () => 'a few seconds ago' }));

describe('ListRating Component', () => {
  const mockProduct = {
    reviews: [
      {
        id: 1,
        user: {
          image: 'https://via.placeholder.com/150',
          name: 'John Doe',
        }, 
        createdDate: '2022-01-01', 
        rating: 4,
        comment: 'Great product!', 
      },
    ],
  };

  it('renders without crashing', () => {
    render(<ListRating product={mockProduct} />);
  });

  it('renders product reviews correctly', () => {
    const { getByText } = render(<ListRating product={mockProduct} />);

    // You can add more specific assertions based on your component rendering
    expect(getByText('Product Review')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('a few seconds ago')).toBeInTheDocument();
    expect(getByText('Great product!')).toBeInTheDocument();
  });

  it('does not render anything when there are no reviews', () => {
    const { container } = render(<ListRating product={{ reviews: [] }} />);
    expect(container.firstChild).toBeNull();
  });
});