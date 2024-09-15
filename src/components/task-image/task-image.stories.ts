import type { Meta, StoryObj } from '@storybook/react'

import taskImage from '@/assets/task-image.jpg'

import { TaskImage } from '.'

const meta = {
  title: 'Components/TaskImage',
  component: TaskImage,
  parameters: {
    layout: 'centered',
  },
  args: {
    src: taskImage.src,
    alt: 'Task image',
    width: 500,
    height: 500,
  },
} satisfies Meta<typeof TaskImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'TaskImage',
}
