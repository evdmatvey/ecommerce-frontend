import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from '../RadioButton';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: 'Components/RadioButton',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'RadioButton component that includes all cases in our design layout',
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  name: 'RadioButton',
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
      <RadioButton name="test" />
      <RadioButton name="test" />
      <RadioButton name="test" />
      <RadioButton disabled />
      <RadioButton disabled checked />
    </div>
  ),
};

export const DarkMode: Story = {
  name: 'RadioButton on dark mode',
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'You can see what the RadioButton component looks like with dark mode',
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
      <RadioButton name="test" />
      <RadioButton name="test" />
      <RadioButton name="test" />
      <RadioButton disabled />
      <RadioButton disabled checked />
    </div>
  ),
};
