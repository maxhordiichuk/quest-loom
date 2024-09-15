import { withFormWrapper } from '@/.storybook/decorators'
import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { QuestForm } from '.'

const meta = {
  title: 'Components/QuestForm',
  component: QuestForm,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
  decorators: [withFormWrapper],
} satisfies Meta<typeof QuestForm>

export default meta
type Story = StoryObj<typeof meta>

export const WithQuest: Story = {}

export const WithoutQuest: Story = {
  args: {
    quest: undefined,
  },
}
