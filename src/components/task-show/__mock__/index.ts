import type { TaskShowProps } from '../types'

import taskImage from './assets/task-image.jpg'

export default {
  task: {
    id: '66d0832be14a7663e71719ab',
    title: 'Slay the Dragon',
    description:
      "The village has been terrorized by a fearsome dragon for too long. It's time to take action and put an end to its reign of terror. Gather your courage and venture into the dragon's lair to slay the beast and bring peace back to the land.",
    code: 'dragon',
    order: 0,
    image: {
      key: 'task-image.jpg',
      url: taskImage.src,
      width: 1792,
      height: 1024,
    },
  },
} satisfies TaskShowProps
