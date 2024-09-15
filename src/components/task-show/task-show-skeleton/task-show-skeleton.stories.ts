import type { Meta, StoryObj } from '@storybook/react'

import { TaskShowSkeleton } from '.'

const meta = {
  title: 'Components/TaskShow/Skeleton',
  component: TaskShowSkeleton,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TaskShowSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Skeleton',
}
