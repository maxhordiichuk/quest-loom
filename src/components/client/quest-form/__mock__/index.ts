import { QuestFormProps } from '../quest-form'

import questImage from './assets/quest-cover.jpg'

export default {
  quest: {
    id: '66d0832be14a7663e71719ab',
    title: 'Slay the Dragon',
    description:
      "The village has been terrorized by a fearsome dragon for too long. It's time to take action and put an end to its reign of terror. Gather your courage and venture into the dragon's lair to slay the beast and bring peace back to the land.",
    cover: {
      key: 'quest-cover.jpg',
      url: questImage.src,
      width: 1792,
      height: 1024,
    },
  },
  formAction: () => new Promise(() => {}),
} satisfies QuestFormProps
