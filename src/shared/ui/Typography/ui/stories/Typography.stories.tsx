import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Components/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'Typography component that includes all cases in our design layout',
      description: {
        component:
          '**Font:** `Inter` | **Weight:** `400 (regular)` `500 (medium)` `600 (semi-bold)` `700 (bold)`',
      },
    },
  },
  argTypes: {
    component: {
      description: 'HTML tag of the component',
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      table: { defaultValue: { summary: 'div' } },
    },
    variant: {
      description: 'The visual version of typography',
      control: { type: 'select' },
      options: [
        'display 1',
        'display 2',
        'display 3',
        'display 4',
        'display 5',
        'display 6',
        'heading 1',
        'heading 2',
        'heading 3',
        'heading 4',
        'heading 5',
        'heading 6',
        'nav link',
        'nav link s',
        'nav link xs',
        'xl',
        'l',
        'regular',
        's',
        'xs',
      ],
    },
    children: {
      description: 'The content of the typography',
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  name: 'Typography',
  args: {
    component: 'div',
    variant: 'regular',
    children: 'Typography',
  },
  parameters: {
    docs: {
      description: {
        story:
          'You should use the option that is specified in the design layout. All typography variants:',
      },
    },
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      {meta.argTypes?.variant?.options?.map((variant) => (
        <div key={variant}>
          <Typography variant={variant} component={args.component}>
            Typography {variant}
          </Typography>
        </div>
      ))}
    </div>
  ),
};
