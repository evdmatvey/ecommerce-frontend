import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'Tooltip component that includes all cases in our design layout',
      description: {
        component: '**Position variants:** `left` `top` `right` `bottom`',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    title: { control: 'text' },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  name: 'Tooltip',
  args: {
    position: 'top',
    title: 'Our custom tooltip',
  },
  render: (args) => (
    <div style={{ padding: '50px', width: '207px', margin: '0 auto' }}>
      <Tooltip {...args}>Hover me! Please hover me</Tooltip>
    </div>
  ),
};

export const DarkMode: Story = {
  name: 'Tooltip on dark mode',
  args: {
    position: 'top',
    title: 'Our custom tooltip',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: (args) => (
    <div
      data-theme="dark"
      style={{
        padding: '50px',
        width: '207px',
        margin: '0 auto',
        color: 'white',
      }}
    >
      <Tooltip {...args}>Hover me! Please hover me</Tooltip>
    </div>
  ),
};
