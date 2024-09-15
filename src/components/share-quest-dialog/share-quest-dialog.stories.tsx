import { withQueryClientProvider } from '@/.storybook/decorators'
import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { ShareQuestDialog } from '.'

const meta = {
  title: 'Components/ShareQuestDialog',
  component: ShareQuestDialog,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  args: data,
  decorators: [withQueryClientProvider],
} satisfies Meta<typeof ShareQuestDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'ShareQuestDialog',
}
