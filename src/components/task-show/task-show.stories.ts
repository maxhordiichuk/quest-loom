import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { TaskShow } from '.'

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

export const PlayerVariant: Story = {}

export const CreatorVariant: Story = {
  args: {
    ...data,
    completeTask: undefined,
  },
}
