import type { Meta, StoryObj } from '@storybook/react';
import Switch from '../Switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Components/Switch',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Switch component that includes all cases in our design layout',
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  name: 'Switch',
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
        width: '50px',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
      }}
    >
      <Switch />
      <Switch checked />
      <Switch disabled />
      <Switch disabled checked />
    </div>
  ),
};

export const DarkMode: Story = {
  name: 'Switch on dark mode',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'You can see what the Switch component looks like with dark mode',
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
        width: '50px',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
      }}
    >
      <Switch />
      <Switch checked />
      <Switch disabled />
      <Switch disabled checked />
    </div>
  ),
};
