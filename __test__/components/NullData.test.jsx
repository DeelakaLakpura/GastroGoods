import React from 'react';
import { render } from '@testing-library/react';
import NullData from '@/app/components/NullData';

describe('NullData Component', () => {
  test('renders with the correct title', () => {
    const title = 'Test Title';
    const { getByText } = render(<NullData title={title} />);

    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument(); 
  });

});
