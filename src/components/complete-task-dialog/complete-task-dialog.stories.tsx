import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'

import data from './__mock__'
import { CompleteTaskDialog } from '.'

const meta = {
  title: 'Components/CompleteTaskDialog',
  component: CompleteTaskDialog,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
} satisfies Meta<typeof CompleteTaskDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'CompleteTaskDialog',
  args: {
    children: <Button>Complete Task</Button>,
  },
}
