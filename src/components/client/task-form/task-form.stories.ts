import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { TaskForm } from './task-form'

const meta = {
  title: 'Components/TaskForm',
  component: TaskForm,
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
  argTypes: {
    task: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof TaskForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'TaskForm',
}
