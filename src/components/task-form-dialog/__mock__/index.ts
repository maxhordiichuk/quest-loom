import taskImage from '@/assets/task-image.jpg'

import type { TaskFormDialogProps } from '../types'

export default {
  task: {
    id: 'a8edb3d2bc7e4a25aa5644dfc615e4ea',
    title: 'Slay the Dragon',
    description:
      "The village has been terrorized by a fearsome dragon for too long. It's time to take action and put an end to its reign of terror. Gather your courage and venture into the dragon's lair to slay the beast and bring peace back to the land.",
    code: 'slay-the-dragon',
    order: 1,
    image: {
      key: 'task-image.jpg',
      url: taskImage.src,
      width: taskImage.width,
      height: taskImage.height,
    },
  },
  onSubmit: () => new Promise(() => {}),
} satisfies Omit<TaskFormDialogProps, 'title' | 'children'>
