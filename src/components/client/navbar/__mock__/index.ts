import type { NavbarProps } from '../navbar'

import avatarImage from './assets/avatar.jpg'

export default {
  user: {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: {
      key: 'avatar.jpg',
      url: avatarImage.src,
    },
  },
} satisfies NavbarProps
