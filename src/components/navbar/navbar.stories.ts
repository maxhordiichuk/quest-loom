import type { Meta, StoryObj } from '@storybook/react'

import data from './__mock__'
import { Navbar } from '.'

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  args: data,
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Navbar',
}
