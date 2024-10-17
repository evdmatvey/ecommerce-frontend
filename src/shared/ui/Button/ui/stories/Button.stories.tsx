import type { Meta, StoryObj } from '@storybook/react';
import HomeIcon from '@/shared/ui/Icons/ui/HomeIcon';
import Button from '../Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Button component that includes all cases in our design layout',
      description: {
        component:
          '**Variants that change in dark mode:** `secondary` `gray` `black` / **Variants that have only a `solid` state:** `gray`',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'danger',
        'black',
        'gray',
      ],
    },
    variant: { control: 'radio', options: ['outlined', 'solid'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    children: {
      description: 'The label of the button',
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    iconPosition: { control: 'radio', options: ['left', 'only', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: 'Button',
  args: {
    color: 'primary',
    size: 'medium',
    variant: 'solid',
  },
  parameters: {
    docs: {
      description: {
        story:
          'You should use the option that is specified in the design layout. All Button variants:',
      },
    },
  },
  render: (args) => <Button {...args}>Click me!</Button>,
};

export const DarkMode: Story = {
  name: 'Button on dark mode',
  args: {
    color: 'gray',
    size: 'medium',
    variant: 'solid',
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can see what the Button component looks like with dark mode',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  render: (args) => (
    <div data-theme="dark">
      <Button {...args}>Click me!</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  name: 'Button with icon',
  args: {
    color: 'primary',
    size: 'medium',
    variant: 'solid',
    iconPosition: 'left',
    icon: <HomeIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: 'You can see what the Button component looks like with icon',
      },
    },
  },
  render: (args) => <Button {...args}>Click me!</Button>,
};
