import type { Meta, StoryObj } from '@storybook/react'

import { QuestEditSkeleton } from '.'

const meta = {
  title: 'Components/QuestEdit/Skeleton',
  component: QuestEditSkeleton,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof QuestEditSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Skeleton',
}
