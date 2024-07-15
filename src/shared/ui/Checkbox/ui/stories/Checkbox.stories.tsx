import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'Checkbox component that includes all cases in our design layout',
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  name: 'Checkbox',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'You should use the option that is specified in the design layout',
      },
    },
  },
  render: () => (
    <div
      style={{
        width: '250px',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
      }}
    >
      <Checkbox />
      <Checkbox />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </div>
  ),
};

export const DarkMode: Story = {
  name: 'Checkbox on dark mode',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'You can see what the Checkbox component looks like with dark mode',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  render: () => (
    <div
      data-theme="dark"
      style={{
        width: '250px',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
      }}
    >
      <Checkbox />
      <Checkbox />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </div>
  ),
};
