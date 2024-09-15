import type { Meta, StoryObj } from '@storybook/react'

import { QuestShowSkeleton } from '.'

const meta = {
  title: 'Components/QuestShow/Skeleton',
  component: QuestShowSkeleton,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof QuestShowSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Skeleton',
}
