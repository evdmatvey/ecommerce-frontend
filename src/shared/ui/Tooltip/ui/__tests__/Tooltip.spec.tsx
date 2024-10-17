import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Tooltip from '../Tooltip';

const tooltipTestIds = {
  TOOLTIP: 'tooltip-testid',
  TITLE: 'title-testid',
};

const TEST_TEXT = 'Tooltip!';
const TEST_CONTENT = <span>tooltip</span>;

describe('Tooltip logic', () => {
  it('Should render tooltip correctly', async () => {
    render(<Tooltip title={TEST_TEXT}>{TEST_CONTENT}</Tooltip>);
    const tooltip = screen.getByTestId(tooltipTestIds.TOOLTIP);
    fireEvent.mouseEnter(tooltip);

    const title = screen.queryByTestId(tooltipTestIds.TITLE);

    expect(screen.queryByTestId(tooltipTestIds.TITLE)).toBeInTheDocument();
    expect(title).toHaveTextContent(TEST_TEXT);
    expect(tooltip.getElementsByTagName('span')[0]).toHaveTextContent(
      'tooltip',
    );
  });
});

describe('Tooltip snapshots', () => {
  it('Tooltip', () => {
    const { asFragment } = render(<Tooltip title="Title">{TEST_TEXT}</Tooltip>);
    expect(asFragment()).toMatchSnapshot();
  });
});
