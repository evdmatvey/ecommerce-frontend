import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Logo from '../Logo';

describe('Logo', () => {
  it('Standard with icon should render correctly', () => {
    const { asFragment } = render(<Logo size="standard" withoutIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Standard without icon should render correctly', () => {
    const { asFragment } = render(<Logo size="standard" withoutIcon={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Large with icon should render correctly', () => {
    const { asFragment } = render(<Logo size="large" withoutIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Large without icon should render correctly', () => {
    const { asFragment } = render(<Logo size="large" withoutIcon={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
