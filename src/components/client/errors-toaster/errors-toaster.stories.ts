import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'

import { ErrorsToaster } from './errors-toaster'

const meta = {
  title: 'Components/ErrorsToaster',
  component: ErrorsToaster,
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
} satisfies Meta<typeof ErrorsToaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'ErrorsToaster',
}
