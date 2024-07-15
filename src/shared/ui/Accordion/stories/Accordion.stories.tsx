import type { Meta, StoryObj } from '@storybook/react';
import HomeIcon from '@/shared/ui/Icons/ui/HomeIcon';
import Accordion from '../ui/Accordion/Accordion';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'Accordion component that includes all cases in our design layout',
      description: {
        component:
          'This component is an implemented compound component pattern. `Accordion` is the wrapper component, `Accordion.Item` - the component of the element',
      },
    },
  },
  argTypes: {
    defaultActiveId: { control: 'number' },
    size: { control: 'radio', options: ['standard', 'large'] },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  name: 'Accordion',
  args: {
    defaultActiveId: 1,
    size: 'standard',
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
    <div style={{ width: '500px', margin: '0 auto' }}>
      <Accordion {...args}>
        <Accordion.Item id={1} title="Lorem ipsum dolor.">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          provident accusantium, deleniti ratione minima repellat, sapiente
          soluta earum expedita recusandae sunt enim deserunt velit itaque.
        </Accordion.Item>
        <Accordion.Item
          id={2}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          dolorem, similique hic molestiae, non tenetur possimus doloribus neque
          quibusdam at officia dignissimos pariatur nostrum. Assumenda minima
          placeat quia quas quam!
        </Accordion.Item>
        <Accordion.Item id={3} title="Lorem ipsum dolor sit amet.">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          maxime.
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const WithIcon: Story = {
  name: 'Accordion with icon',
  args: {
    defaultActiveId: 1,
    size: 'standard',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can see what the Accordion component looks like with icon',
      },
    },
  },
  render: (args) => (
    <div style={{ width: '500px', margin: '0 auto' }}>
      <Accordion {...args}>
        <Accordion.Item id={1} title="Lorem ipsum dolor.">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          provident accusantium, deleniti ratione minima repellat, sapiente
          soluta earum expedita recusandae sunt enim deserunt velit itaque.
        </Accordion.Item>
        <Accordion.Item
          icon={<HomeIcon />}
          id={2}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          dolorem, similique hic molestiae, non tenetur possimus doloribus neque
          quibusdam at officia dignissimos pariatur nostrum. Assumenda minima
          placeat quia quas quam!
        </Accordion.Item>
        <Accordion.Item
          icon={<HomeIcon />}
          id={3}
          title="Lorem ipsum dolor sit amet."
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          maxime.
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const DarkMode: Story = {
  name: 'Accordion on dark mode',
  args: {
    defaultActiveId: 1,
    size: 'standard',
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can see what the Accordion component looks like with dark mode',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  render: (args) => (
    <div data-theme="dark" style={{ width: '500px', margin: '0 auto' }}>
      <Accordion {...args}>
        <Accordion.Item id={1} title="Lorem ipsum dolor.">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          provident accusantium, deleniti ratione minima repellat, sapiente
          soluta earum expedita recusandae sunt enim deserunt velit itaque.
        </Accordion.Item>
        <Accordion.Item
          icon={<HomeIcon />}
          id={2}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          dolorem, similique hic molestiae, non tenetur possimus doloribus neque
          quibusdam at officia dignissimos pariatur nostrum. Assumenda minima
          placeat quia quas quam!
        </Accordion.Item>
        <Accordion.Item
          icon={<HomeIcon />}
          id={3}
          title="Lorem ipsum dolor sit amet."
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          maxime.
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};
