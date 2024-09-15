import taskImage from '@/assets/task-image.jpg'

import type { TaskShowProps } from '../types'

export default {
  task: {
    title: 'Slay the Dragon',
    description:
      "The village has been terrorized by a fearsome dragon for too long. It's time to take " +
      'action and put an end to its reign of terror. Gather your courage and venture into the ' +
      "dragon's lair to slay the beast and bring peace back to the land.",
    order: 0,
    image: {
      key: 'task-image.jpg',
      url: taskImage.src,
      width: taskImage.width,
      height: taskImage.height,
    },
  },
  assignmentId: '66d083266d083266d083266d',
  completeTask: () => new Promise(() => {}),
} satisfies TaskShowProps
