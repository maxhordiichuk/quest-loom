import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { Navbar } from '.'

const user = {
  email: 'user@example.com',
}

describe('Navbar', () => {
  test('renders the logo', () => {
    render(<Navbar user={user} />)

    expect(screen.getByRole('link', { name: 'Quest Loom' })).toBeInTheDocument()
  })

  test('renders quests link', async () => {
    render(<Navbar user={user} />)

    expect(screen.getByText('Quests')).toBeInTheDocument()
  })

  test('renders user email', async () => {
    render(<Navbar user={user} />)

    const button = screen.queryAllByRole('button', { name: 'Toggle user menu' })[0]
    await userEvent.click(button)

    expect(screen.getByText(user.email)).toBeInTheDocument()
  })
})
