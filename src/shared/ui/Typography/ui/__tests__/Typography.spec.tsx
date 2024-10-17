import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Typography from '../Typography';

const TEST_TEST = 'Test text';

describe('Typography', () => {
  it('Standard should render correctly', () => {
    const { asFragment } = render(<Typography>{TEST_TEST}</Typography>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Display should render correctly', () => {
    const { asFragment } = render(
      <Typography variant="display 1">{TEST_TEST}</Typography>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Heading should render correctly', () => {
    const { asFragment } = render(
      <Typography variant="heading 1">{TEST_TEST}</Typography>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Large should render correctly', () => {
    const { asFragment } = render(
      <Typography variant="l">{TEST_TEST}</Typography>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Nav link should render correctly', () => {
    const { asFragment } = render(
      <Typography variant="nav link">{TEST_TEST}</Typography>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Small should render correctly', () => {
    const { asFragment } = render(
      <Typography variant="s">{TEST_TEST}</Typography>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('H1 should render correctly', () => {
    const { asFragment } = render(
      <Typography component="h1">{TEST_TEST}</Typography>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('P should render correctly', () => {
    const { asFragment } = render(
      <Typography component="p">{TEST_TEST}</Typography>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Span should render correctly', () => {
    const { asFragment } = render(
      <Typography component="span">{TEST_TEST}</Typography>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
