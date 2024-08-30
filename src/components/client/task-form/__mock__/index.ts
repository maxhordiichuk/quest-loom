import { TaskFormProps } from '../task-form'

import questImage from './assets/task-image.jpg'

export default {
  task: {
    title: 'Slay the Dragon',
    description:
      "The village has been terrorized by a fearsome dragon for too long. It's time to take action and put an end to its reign of terror. Gather your courage and venture into the dragon's lair to slay the beast and bring peace back to the land.",
    imageUrl: questImage.src,
    code: 'dragon',
  },
} satisfies TaskFormProps
