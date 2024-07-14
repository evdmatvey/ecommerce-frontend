import type { Meta, StoryObj } from '@storybook/react';
import HomeIcon from '@/shared/ui/Icons/ui/HomeIcon';
import Badge from '../Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Badge component that includes all cases in our design layout',
      description: {
        component: '**Variants that change in dark mode:** `translucent`',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'info', 'success', 'warning', 'danger'],
    },
    variant: { control: 'radio', options: ['translucent', 'solid'] },
    children: {
      description: 'The label of the badge',
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    iconPosition: { control: 'radio', options: ['left', 'only', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  name: 'Badge',
  args: {
    color: 'primary',
    variant: 'solid',
  },
  parameters: {
    docs: {
      description: {
        story:
          'You should use the option that is specified in the design layout',
      },
    },
  },
  render: (args) => <Badge {...args}>Badge</Badge>,
};

export const WithIcon: Story = {
  name: 'Badge with icon',
  args: {
    color: 'primary',
    variant: 'solid',
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can see what the Badge component looks like with icon',
      },
    },
  },
  render: (args) => (
    <Badge icon={<HomeIcon />} {...args}>
      Badge
    </Badge>
  ),
};

export const DarkMode: Story = {
  name: 'Badge on dark mode',
  args: {
    color: 'primary',
    variant: 'solid',
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can see what the Badge component looks like on dark mode',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  render: (args) => (
    <div data-theme="dark">
      <Badge icon={<HomeIcon />} {...args}>
        Badge
      </Badge>
    </div>
  ),
};
