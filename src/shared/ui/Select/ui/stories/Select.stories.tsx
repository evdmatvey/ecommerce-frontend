import type { Meta, StoryObj } from '@storybook/react';
import Select from '../Select/Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Components/Select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Select component that includes all cases in our design layout',
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  name: 'Select',
  args: {
    size: 'medium',
    placeholder: 'Placeholder',
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
    <div style={{ width: '260px', height: '200px', margin: '0 auto' }}>
      <Select {...args}>
        <Select.Item>Option 1</Select.Item>
        <Select.Item>Option 2</Select.Item>
        <Select.Item disabled>Option 3</Select.Item>
      </Select>
    </div>
  ),
};

// export const DarkMode: Story = {
//   name: 'RadioButton on dark mode',
//   args: {},
//   parameters: {
//     docs: {
//       description: {
//         story:
//           'You can see what the RadioButton component looks like with dark mode',
//       },
//     },
//     backgrounds: {
//       default: 'dark',
//     },
//   },
//   render: () => (
//     <div
//       data-theme="dark"
//       style={{
//         width: '250px',
//         display: 'flex',
//         gap: '10px',
//         flexDirection: 'column',
//       }}
//     >
//       <RadioButton name="test" />
//       <RadioButton name="test" />
//       <RadioButton name="test" />
//       <RadioButton disabled />
//       <RadioButton disabled checked />
//     </div>
//   ),
// };
