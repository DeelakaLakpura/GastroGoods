// cart.context.spec.tsx
import { render, screen, waitFor } from '@testing-library/react'; // Import the waitFor function
import userEvent from '@testing-library/user-event';
import { CartContextProvider, useCart } from '@/hooks/useCart'; // Update this with the correct path

describe('Cart Context', () => {
  test('should add a product to the cart', async () => {
    const TestComponent = () => {
      const cart = useCart();

      return (
        <div>
          <span data-testid="cart-quantity">{cart.cartTotalQty}</span>
          <button onClick={() => cart.handleAddProductToCart({ id: '1', name: 'Product', price: 10, quantity: 1 })}>
            Add to Cart
          </button>
        </div>
      );
    };
 
    render(
      <CartContextProvider>
        <TestComponent />
      </CartContextProvider>
    );

    const cartQuantity = screen.getByTestId('cart-quantity');
    expect(cartQuantity.textContent).toBe('0');

    const addToCartButton = screen.getByText('Add to Cart');
    userEvent.click(addToCartButton);

    await waitFor(() => { // Fix the waitFor function
      expect(cartQuantity.textContent).toBe('1');
    });
  });

  // Add more tests for other functions in a similar manner
});