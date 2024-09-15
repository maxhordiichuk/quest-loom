import type { Meta, StoryObj } from '@storybook/react'

import { LoginPage } from '.'

const meta = {
  title: 'Components/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    csrfToken: '8a116343f27941f4834a30b15166379c',
  },
} satisfies Meta<typeof LoginPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'LoginPage',
}
