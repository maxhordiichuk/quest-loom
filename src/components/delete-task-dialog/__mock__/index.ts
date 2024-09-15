import type { DeleteTaskDialogProps } from '../types'

export default {
  task: {
    id: 'a8edb3d2bc7e4a25aa5644dfc615e4ea',
    title: 'Slay the Dragon',
    description:
      "The village has been terrorized by a fearsome dragon for too long. It's time to take action and put an end to its reign of terror. Gather your courage and venture into the dragon's lair to slay the beast and bring peace back to the land.",
    code: 'slay-the-dragon',
    order: 1,
  },
} satisfies Omit<DeleteTaskDialogProps, 'children'>
