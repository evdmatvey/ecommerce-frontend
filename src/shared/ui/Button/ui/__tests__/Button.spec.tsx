import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from '../Button';

export const buttonTestIds = {
  BUTTON: 'button',
  CHILDREN: 'children',
  ICON_LEFT: 'icon-left',
  ICON_ONLY: 'icon-only',
  ICON_RIGHT: 'icon-right',
};

const TEST_TEXT = 'Click me';

const Icon = <span>Icon</span>;

describe('Button icons', () => {
  it('Renders the button with the correct text', () => {
    render(<Button>{TEST_TEXT}</Button>);
    const button = screen.getByTestId(buttonTestIds.BUTTON);
    expect(button).toHaveTextContent(TEST_TEXT);
  });

  it('Renders the button with an icon on the left', () => {
    render(
      <Button icon={Icon} iconPosition="left">
        {TEST_TEXT}
      </Button>,
    );
    const icon = screen.getByTestId(buttonTestIds.ICON_LEFT);
    const children = screen.getByTestId(buttonTestIds.CHILDREN);
    expect(icon).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });

  it('Renders the button with an icon on the left (without position declaration)', () => {
    render(<Button icon={Icon}>{TEST_TEXT}</Button>);
    const icon = screen.getByTestId(buttonTestIds.ICON_LEFT);
    const children = screen.getByTestId(buttonTestIds.CHILDREN);
    expect(icon).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });

  it('Renders the button with an icon only', () => {
    render(<Button icon={Icon} iconPosition="only" />);
    const icon = screen.getByTestId(buttonTestIds.ICON_ONLY);
    expect(icon).toBeInTheDocument();
    expect(
      screen.queryByTestId(buttonTestIds.CHILDREN),
    ).not.toBeInTheDocument();
  });

  it('Renders the button with an icon on the right', () => {
    render(
      <Button icon={Icon} iconPosition="right">
        {TEST_TEXT}
      </Button>,
    );
    const icon = screen.getByTestId(buttonTestIds.ICON_RIGHT);
    const children = screen.getByTestId(buttonTestIds.CHILDREN);
    expect(icon).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});

describe('Button snapshots', () => {
  it('Button with left icon (without position declaration)', () => {
    const { asFragment } = render(<Button icon={Icon}>{TEST_TEXT}</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Button with left icon', () => {
    const { asFragment } = render(
      <Button icon={Icon} iconPosition="left">
        {TEST_TEXT}
      </Button>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Button with right icon', () => {
    const { asFragment } = render(
      <Button icon={Icon} iconPosition="right">
        {TEST_TEXT}
      </Button>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Button with icon only', () => {
    const { asFragment } = render(<Button icon={Icon} iconPosition="only" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
