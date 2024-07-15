import type { Meta, StoryObj } from '@storybook/react';
import { HomeIcon } from '@/shared/ui/Icons';
import TextField from '../TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Components/TextField',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'TextField component that includes all cases in our design layout',
    },
  },
  argTypes: {
    variant: { control: 'radio', options: ['small', 'medium', 'large'] },
    error: {
      control: 'text',
      description: 'Error message',
    },
    isSuccess: { control: 'boolean' },
    icon: {
      description: 'The icon of the input',
      control: { type: 'object' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    iconPosition: { control: 'inline-radio', options: ['left', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  name: 'TextFiled',
  args: {
    variant: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story:
          'You should use the option that is specified in the design layout',
      },
    },
  },
  render: (args) => (
    <div style={{ width: '250px' }}>
      <TextField {...args} placeholder="Placeholder" />
    </div>
  ),
};

export const WithIcon: Story = {
  name: 'TextField with icon',
  args: {
    variant: 'medium',
    iconPosition: 'left',
    icon: <HomeIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: 'You can see what the TextField component looks like with icon',
      },
    },
  },
  render: (args) => (
    <div style={{ width: '250px' }}>
      <TextField {...args} placeholder="Placeholder" />
    </div>
  ),
};

export const OnDarkMode: Story = {
  name: 'TextFiled on dark mode',
  args: {
    variant: 'medium',
    iconPosition: 'left',
    icon: <HomeIcon />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can see what the TextField component looks like with dark theme',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  render: (args) => (
    <div data-theme="dark" style={{ width: '250px' }}>
      <TextField {...args} placeholder="Placeholder" />
    </div>
  ),
};
