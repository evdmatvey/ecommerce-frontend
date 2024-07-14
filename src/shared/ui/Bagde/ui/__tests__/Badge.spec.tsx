import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Badge from '../Badge';

export const badgeTestIds = {
  BADGE: 'badge-testid',
  ICON_LEFT: 'icon-left-testid',
  ICON_ONLY: 'icon-only-testid',
  ICON_RIGHT: 'icon-right-testid',
};

const TEST_TEXT = 'Budge!';
const TEST_ICON = <span>Icon</span>;

describe('Badge logic', () => {
  it('Should render badge correctly', () => {
    render(<Badge>{TEST_TEXT}</Badge>);
    const budge = screen.getByTestId(badgeTestIds.BADGE);
    expect(budge).toHaveTextContent(TEST_TEXT);
  });

  it('Should render badge correctly with left icon', () => {
    render(
      <Badge icon={TEST_ICON} iconPosition="left">
        {TEST_TEXT}
      </Badge>,
    );
    const budge = screen.getByTestId(badgeTestIds.BADGE);
    const leftIcon = screen.getByTestId(badgeTestIds.ICON_LEFT);
    expect(budge).toHaveTextContent(TEST_TEXT);
    expect(leftIcon).toBeInTheDocument();
  });

  it('Should render badge correctly with left icon (without position declaration)', () => {
    render(<Badge icon={TEST_ICON}>{TEST_TEXT}</Badge>);
    const budge = screen.getByTestId(badgeTestIds.BADGE);
    const leftIcon = screen.getByTestId(badgeTestIds.ICON_LEFT);
    expect(budge).toHaveTextContent(TEST_TEXT);
    expect(leftIcon).toBeInTheDocument();
  });

  it('Should render badge correctly with right icon', () => {
    render(
      <Badge icon={TEST_ICON} iconPosition="right">
        {TEST_TEXT}
      </Badge>,
    );
    const budge = screen.getByTestId(badgeTestIds.BADGE);
    const rightIcon = screen.getByTestId(badgeTestIds.ICON_RIGHT);
    expect(budge).toHaveTextContent(TEST_TEXT);
    expect(rightIcon).toBeInTheDocument();
  });

  it('Should render badge correctly with icon only', () => {
    render(<Badge icon={TEST_ICON} iconPosition="only" />);
    const icon = screen.getByTestId(badgeTestIds.ICON_ONLY);
    expect(icon).toBeInTheDocument();
  });
});

describe('Badge snapshots', () => {
  it('Badge with left icon (without position declaration)', () => {
    const { asFragment } = render(<Badge icon={TEST_ICON}>{TEST_TEXT}</Badge>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Badge with left icon', () => {
    const { asFragment } = render(
      <Badge icon={TEST_ICON} iconPosition="left">
        {TEST_TEXT}
      </Badge>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Badge with right icon', () => {
    const { asFragment } = render(
      <Badge icon={TEST_ICON} iconPosition="right">
        {TEST_TEXT}
      </Badge>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Badge with icon only', () => {
    const { asFragment } = render(
      <Badge icon={TEST_ICON} iconPosition="only" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
