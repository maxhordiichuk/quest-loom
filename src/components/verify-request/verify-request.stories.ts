import type { Meta, StoryObj } from '@storybook/react'

import { VerifyRequest } from '.'

const meta = {
  title: 'Components/VerifyRequest',
  component: VerifyRequest,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof VerifyRequest>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'VerifyRequest',
}
