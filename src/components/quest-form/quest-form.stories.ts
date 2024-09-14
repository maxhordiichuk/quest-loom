import { withFormWrapper } from '@/.storybook/decorators'
import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { QuestForm } from './quest-form'

const meta = {
  title: 'Components/QuestForm',
  component: QuestForm,
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
  argTypes: {
    quest: {
      control: {
        type: 'object',
      },
    },
  },
  decorators: [withFormWrapper],
} satisfies Meta<typeof QuestForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'QuestForm',
}
