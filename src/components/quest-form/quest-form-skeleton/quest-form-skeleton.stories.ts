import { withFormWrapper } from '@/.storybook/decorators'
import type { Meta, StoryObj } from '@storybook/react'

import { QuestFormSkeleton } from '.'

const meta = {
  title: 'Components/QuestForm/Skeleton',
  component: QuestFormSkeleton,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withFormWrapper],
} satisfies Meta<typeof QuestFormSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Skeleton',
}
