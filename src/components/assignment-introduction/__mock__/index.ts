import questImage from '@/assets/quest-image.jpg'

import type { AssignmentIntroductionProps } from '../types'

export default {
  assignmentId: 'e8407da112294795be708033c854fa20',
  quest: {
    title: 'Slay the Dragon',
    description:
      "The village has been terrorized by a fearsome dragon for too long. It's time to take action and put an end to its reign of terror. Gather your courage and venture into the dragon's lair to slay the beast and bring peace back to the land.",
    image: {
      key: 'quest-cover.jpg',
      url: questImage.src,
      width: questImage.width,
      height: questImage.height,
    },
  },
  startAssignment: () => Promise.resolve({}),
} satisfies AssignmentIntroductionProps
