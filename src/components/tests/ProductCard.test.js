import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { products } from '../../api/products';

import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  it('renders ProductCard component', () => {
    render(<ProductCard product={products[0]} />);

    expect(screen.getByText('Hiphugger')).toBeInTheDocument();
    expect(screen.getByText('$35')).toBeInTheDocument();
  });

  it('clicking a color will activate it', async () => {
    const user = userEvent.setup()
    render(<ProductCard product={products[0]} />);

    const color1 = await screen.getByTestId('color-opt-1');
    await user.click(color1);

    await expect(screen.queryByTestId(`color-opt-0-active`)).not.toBeInTheDocument();
    await expect(screen.queryByTestId(`color-opt-1-active`)).toBeInTheDocument();
  });

  it('clicking a variant will activate the css and deactivate another', async () => {
    const user = userEvent.setup()
    render(<ProductCard product={products[0]} />);

    const variant0 = await screen.getByTestId('variant-opt-0');
    const variant1 = await screen.getByTestId('variant-opt-1');
    await user.click(variant1);

    await expect(screen.getByTestId('variant-opt-0')).toHaveStyle('border: 0.125rem solid #cccccc');
    await expect(screen.getByTestId('variant-opt-1')).toHaveStyle('border: 0.125rem solid black');
    
    await user.click(variant0);
    await expect(screen.getByTestId('variant-opt-0')).toHaveStyle('border: 0.125rem solid black');
    await expect(screen.getByTestId('variant-opt-1')).toHaveStyle('border: 0.125rem solid #cccccc');
  });
});