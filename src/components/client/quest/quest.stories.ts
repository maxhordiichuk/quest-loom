import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { Quest } from './quest'

const meta = {
  title: 'Components/Quest',
  component: Quest,
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    imageURL: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Quest>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Quest',
}
