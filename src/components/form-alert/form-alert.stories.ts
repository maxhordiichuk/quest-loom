import type { Meta, StoryObj } from '@storybook/react'

import { FormAlert } from '.'

const meta = {
  title: 'Components/FormAlert',
  component: FormAlert,
  parameters: {
    layout: 'centered',
  },
  args: {
    message: 'Something went wrong',
  },
} satisfies Meta<typeof FormAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'FormAlert',
}
