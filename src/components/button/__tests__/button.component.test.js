import { render, screen } from '@testing-library/react'
import Button, { BUTTON_TYPE_CLASSES } from '../button.component'

describe('Button tests', () => {
  it('should render base button when nothing is passed', () => {
    render(<Button />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: white');   // It only checks hover style
  });

  it('should render google button when button type is google', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: #357ae8');   // It only checks hover style
  });

  it('should render inverted button when button type is inverted', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: black');   // It only checks hover style
  });

  it('should be disabled if isLoading is true', () => {
    render(<Button isLoading={true} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });
});
