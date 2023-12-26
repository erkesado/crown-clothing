import { screen, fireEvent, render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { renderWithProviders } from '../../../utils/test/test.utils';
import Navigation from '../navigation.component';
import { signOutStart } from '../../../store/user/user.action';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('Navigation tests', () => {
  it('should render Sign in and not Sign out if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        }
      }
    });

    const signInLink = screen.getByText(/sign in/i);
    expect(signInLink).toBeInTheDocument();

    const signOutLink = screen.queryByText(/sign out/i);
    expect(signOutLink).toBeNull();
  });

  it('should render Sign out and not Sign in if there is a currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    });

    const signOutLink = screen.getByText(/sign out/i);
    expect(signOutLink).toBeInTheDocument();

    const signInLink = screen.queryByText(/sign in/i);
    expect(signInLink).toBeNull();
  });

  it('should render a cart dropdown when isCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        }
      }
    });

    const goToCheckoutButton = screen.getByText(/go to checkout/i);
    expect(goToCheckoutButton).toBeInTheDocument();
  });

  it('should not render a cart dropdown when isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        }
      }
    });

    const goToCheckoutButton = screen.queryByText(/go to checkout/i);
    expect(goToCheckoutButton).toBeNull();
  });

  it('should dispatch signOutStart action when clicking on the Sign Out link', async () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    });

    const signOutLink = screen.getByText(/sign out/i);
    expect(signOutLink).toBeInTheDocument();

    await fireEvent.click(signOutLink);
    expect(mockDispatch).toHaveBeenCalled();

    const signOutAction = signOutStart();
    expect(mockDispatch).toHaveBeenCalledWith(signOutAction);

    mockDispatch.mockClear();
  });
});