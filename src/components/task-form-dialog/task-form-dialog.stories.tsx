import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'

import data from './__mock__'
import { TaskFormDialog } from '.'

const meta = {
  title: 'Components/TaskFormDialog',
  component: TaskFormDialog,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
} satisfies Meta<typeof TaskFormDialog>

export default meta
type Story = StoryObj<typeof meta>

export const WithTask: Story = {
  args: {
    title: 'Update the Task',
    children: <Button>Update Task</Button>,
  },
}

export const WithoutTask: Story = {
  args: {
    title: 'Create a new Task',
    task: undefined,
    children: <Button>Create Task</Button>,
  },
}
