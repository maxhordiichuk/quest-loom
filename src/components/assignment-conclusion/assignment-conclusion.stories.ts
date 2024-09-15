import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { AssignmentConclusion } from '.'

const meta = {
  title: 'Components/AssignmentConclusion',
  component: AssignmentConclusion,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
} satisfies Meta<typeof AssignmentConclusion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'AssignmentConclusion',
}
