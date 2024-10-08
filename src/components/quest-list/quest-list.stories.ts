import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { QuestList } from '.'

const meta = {
  title: 'Components/QuestList',
  component: QuestList,
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
} satisfies Meta<typeof QuestList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'QuestList',
}
