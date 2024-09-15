import type { Meta, StoryObj } from '@storybook/react'

import { PageHeading } from '@/components/page-heading'

import { PageContent } from '.'

const meta = {
  title: 'Components/PageContent',
  component: PageContent,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof PageContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'PageContent',
  args: {
    children: <PageHeading title="Page Heading" subtitle="Page Subtitle" />,
  },
}
