import type { Meta, StoryObj } from '@storybook/react'

import { PageContent } from '@/components/page-content'

import { PageHeading } from '.'
import type { PageHeadingProps } from './types'

const meta = {
  title: 'Components/PageHeading',
  component: PageHeading,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    title: 'Page Heading',
    subtitle: 'Page Subtitle',
    isSeparatorVisible: true,
  },
} satisfies Meta<typeof PageHeading>

export default meta
type Story = StoryObj<typeof meta>

function Template(args: PageHeadingProps) {
  return (
    <PageContent>
      <PageHeading {...args} />
    </PageContent>
  )
}

export const Basic: Story = {
  render: Template,
}

export const WithoutSubtitle: Story = {
  args: {
    subtitle: null,
  },
  render: Template,
}

export const WithoutSeparator: Story = {
  args: {
    isSeparatorVisible: false,
  },
  render: Template,
}
