import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Counter from '../Counter';

describe('Counter logic', () => {
  it('should render the component with the default size', () => {
    render(<Counter count={0} decrement={() => {}} increment={() => {}} />);
    expect(screen.getByTestId('decrement')).toBeInTheDocument();
    expect(screen.getByTestId('increment')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByTestId('decrement')).not.toBeDisabled();
    expect(screen.getByTestId('increment')).not.toBeDisabled();
  });

  it('should call the decrement function when the decrement button is clicked', () => {
    const decrementMock = vi.fn();
    render(
      <Counter count={0} decrement={decrementMock} increment={() => {}} />,
    );
    fireEvent.click(screen.getByTestId('decrement'));
    expect(decrementMock).toHaveBeenCalledTimes(1);
  });

  it('should call the increment function when the increment button is clicked', () => {
    const incrementMock = vi.fn();
    render(
      <Counter count={0} decrement={() => {}} increment={incrementMock} />,
    );
    fireEvent.click(screen.getByTestId('increment'));
    expect(incrementMock).toHaveBeenCalledTimes(1);
  });

  it("shouldn't call the increment function when the increment button is clicked", () => {
    const incrementMock = vi.fn();
    render(
      <Counter
        count={1}
        max={1}
        decrement={() => {}}
        increment={incrementMock}
      />,
    );
    fireEvent.click(screen.getByTestId('increment'));
    expect(incrementMock).not.toHaveBeenCalledTimes(1);
  });

  it('should disable the decrement button when the count is at the minimum', () => {
    render(
      <Counter count={1} min={1} decrement={() => {}} increment={() => {}} />,
    );
    expect(screen.getByTestId('decrement')).toBeDisabled();
    expect(screen.getByTestId('increment')).not.toBeDisabled();
  });

  it('should disable the increment button when the count is at the maximum', () => {
    render(
      <Counter count={10} max={10} decrement={() => {}} increment={() => {}} />,
    );
    expect(screen.getByTestId('increment')).toBeDisabled();
    expect(screen.getByTestId('decrement')).not.toBeDisabled();
  });
});

describe('Counter snapshots', () => {
  it('Counter with disabled decrement', () => {
    const { asFragment } = render(
      <Counter
        count={1}
        min={1}
        max={10}
        increment={() => {}}
        decrement={() => {}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Counter with disabled increment', () => {
    const { asFragment } = render(
      <Counter
        count={1}
        min={10}
        max={10}
        increment={() => {}}
        decrement={() => {}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
