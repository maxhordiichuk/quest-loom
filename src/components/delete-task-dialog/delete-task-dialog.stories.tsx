import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'

import data from './__mock__'
import { DeleteTaskDialog } from '.'

const meta = {
  title: 'Components/DeleteTaskDialog',
  component: DeleteTaskDialog,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
} satisfies Meta<typeof DeleteTaskDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'DeleteTaskDialog',
  args: {
    children: <Button variant="destructive">Delete Task</Button>,
  },
}
