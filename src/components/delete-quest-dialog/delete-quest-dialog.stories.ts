import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { DeleteQuestDialog } from '.'

const meta = {
  title: 'Components/DeleteQuestDialog',
  component: DeleteQuestDialog,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
} satisfies Meta<typeof DeleteQuestDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'DeleteQuestDialog',
}
