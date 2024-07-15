import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TextField from '../TextField';

const TEST_ICON = <span>Icon</span>;

describe('TextField snapshots', () => {
  it('TextField with standard props', () => {
    const { asFragment } = render(<TextField />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('TextField success', () => {
    const { asFragment } = render(<TextField isSuccess />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('TextField error', () => {
    const { asFragment } = render(<TextField error="Error" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('TextField with icon standard props', () => {
    const { asFragment } = render(<TextField icon={TEST_ICON} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('TextField with icon and error', () => {
    const { asFragment } = render(<TextField icon={TEST_ICON} error="Error" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
