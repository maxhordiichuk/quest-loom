import type { Meta, StoryObj } from '@storybook/react'

import { SubmitButton } from '.'

const meta = {
  title: 'Components/SubmitButton',
  component: SubmitButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Submit'
  },
} satisfies Meta<typeof SubmitButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
