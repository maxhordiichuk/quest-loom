import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { AssignmentIntroduction } from '.'

const meta = {
  title: 'Components/AssignmentIntroduction',
  component: AssignmentIntroduction,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
} satisfies Meta<typeof AssignmentIntroduction>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'AssignmentIntroduction',
}
