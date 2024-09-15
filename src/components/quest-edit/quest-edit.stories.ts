import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { QuestEdit } from '.'

const meta = {
  title: 'Components/QuestEdit',
  component: QuestEdit,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
} satisfies Meta<typeof QuestEdit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'QuestEdit',
}
