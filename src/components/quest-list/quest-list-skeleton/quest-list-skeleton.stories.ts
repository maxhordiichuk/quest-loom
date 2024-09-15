import type { Meta, StoryObj } from '@storybook/react'

import { QuestListSkeleton } from '.'

const meta = {
  title: 'Components/QuestList/Skeleton',
  component: QuestListSkeleton,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof QuestListSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Skeleton',
}
