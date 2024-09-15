import type { Meta, StoryObj } from '@storybook/react'

import { QuestNew } from '.'

const meta = {
  title: 'Components/QuestNew',
  component: QuestNew,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof QuestNew>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'QuestNew',
}
