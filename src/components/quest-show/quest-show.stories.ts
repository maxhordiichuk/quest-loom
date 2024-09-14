import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { QuestShow } from './quest-show'

const meta = {
  title: 'Components/QuestShow',
  component: QuestShow,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
} satisfies Meta<typeof QuestShow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'QuestShow',
}
