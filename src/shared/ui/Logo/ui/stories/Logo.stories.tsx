import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Components/Logo',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Logo component',
    },
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    size: { control: 'radio' },
    withoutIcon: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  name: 'Logo',
  args: {
    size: 'standard',
    withoutIcon: false,
  },
};
