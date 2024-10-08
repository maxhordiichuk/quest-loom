import type { Meta, StoryObj } from '@storybook/react'

import { withFormWrapper } from '@/.storybook/decorators'

import data from './__mock__'
import { TaskForm } from '.'

const meta = {
  title: 'Components/TaskForm',
  component: TaskForm,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
  decorators: [withFormWrapper],
} satisfies Meta<typeof TaskForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'TaskForm',
}
