import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { TaskShow } from './task-show'

const meta = {
  title: 'Components/TaskShow',
  component: TaskShow,
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
} satisfies Meta<typeof TaskShow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'TaskShow',
}

export const WithoutCompleteAction: Story = {
  name: 'TaskShow Preview',
  args: {
    ...data,
    completeTask: undefined,
  },
}
