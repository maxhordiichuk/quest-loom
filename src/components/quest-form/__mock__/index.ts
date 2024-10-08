import questImage from '@/assets/quest-image.jpg'

import { QuestFormProps } from '../types'

export default {
  quest: {
    id: '66d0832be14a7663e71719ab',
    title: 'Slay the Dragon',
    description:
      "The village has been terrorized by a fearsome dragon for too long. It's time to take action and put an end to its reign of terror. Gather your courage and venture into the dragon's lair to slay the beast and bring peace back to the land.",
    image: {
      key: 'quest-image.jpg',
      url: questImage.src,
      width: questImage.width,
      height: questImage.height,
    },
  },
  onSubmit: () => new Promise(() => {}),
} satisfies QuestFormProps
