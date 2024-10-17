import type { Meta, StoryObj } from '@storybook/react';
import Counter from '../Counter';

const meta: Meta<typeof Counter> = {
  component: Counter,
  title: 'Components/Counter',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'Counter component that includes all cases in our design layout',
    },
  },
  argTypes: {
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    count: { control: 'number', description: 'Current counter state' },
    min: {
      control: 'number',
      description:
        'The minimum value is count. It is necessary to disable the decrement button',
    },
    max: {
      control: 'number',
      description:
        'The maximum value of count. It is necessary to disable the increment button',
    },
    increment: {
      control: 'object',
      description: 'Function that works when the `count` is increased',
    },
    decrement: {
      control: 'object',
      description: 'Function that works when the `count` is reduced',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  name: 'Counter',
  args: {
    size: 'medium',
    count: 1,
    min: 1,
    max: 10,
  },
  parameters: {
    docs: {
      description: {
        story:
          'You should use the option that is specified in the design layout',
      },
    },
  },
  render: (args) => <Counter {...args}>Click me!</Counter>,
};

export const DarkMode: Story = {
  name: 'Counter on dark mode',
  args: {
    size: 'medium',
    count: 1,
    min: 1,
    max: 10,
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can see what the Counter component looks like with dark mode',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  render: (args) => (
    <div data-theme="dark">
      <Counter {...args}>Click me!</Counter>
    </div>
  ),
};
