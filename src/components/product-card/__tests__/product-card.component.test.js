import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.utils';
import ProductCard from '../product-card.component';

describe('Product Card tests', () => {
  it('should add a corresponding product item when ADD TO CART button on a Product Card is clicked', async () => {
    const mockProduct = {
      id: 1,
      name: 'Item A',
      imageUrl: 'test',
      price: 10,
    };

    const { store } = renderWithProviders(<ProductCard product={mockProduct} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        }
      }
    });

    expect.assertions(1);

    const addToCartButton = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButton);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});