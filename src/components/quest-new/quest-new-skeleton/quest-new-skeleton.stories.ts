import type { Meta, StoryObj } from '@storybook/react'

import { QuestNewSkeleton } from '.'

const meta = {
  title: 'Components/QuestNew/Skeleton',
  component: QuestNewSkeleton,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof QuestNewSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Skeleton',
}
