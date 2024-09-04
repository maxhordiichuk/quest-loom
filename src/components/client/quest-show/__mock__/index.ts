import type { QuestShowProps } from '../types'

import questImage from './assets/quest-image.jpg'

export default {
  quest: {
    id: '66d0832be14a7663e71719ab',
    title: 'Slay the Dragon',
    description:
      "The village has been terrorized by a fearsome dragon for too long. It's time to take action and put an end to its reign of terror. Gather your courage and venture into the dragon's lair to slay the beast and bring peace back to the land.",
    image: {
      url: questImage.src,
      width: 1792,
      height: 1024,
    },
  },
  tasks: [
    {
      id: '65a40bfbf0f54111933939f8',
      title: 'Gather Supplies',
      description: 'Collect the necessary items to prepare for the battle.',
      code: 'password',
      order: 0,
      image: null,
    },
    {
      id: '0fa4f68a872049c9a81a6e45',
      title: 'Explore the Cave',
      description: "Venture into the dark and treacherous cave to find the dragon's lair.",
      code: 'password',
      order: 1,
      image: null,
    },
    {
      id: 'a4d2344bab654d139573ba6c',
      title: 'Defeat the Dragon',
      description: 'Face the mighty dragon in an epic battle and emerge victorious.',
      code: 'password',
      order: 2,
      image: null,
    },
    {
      id: '36de1d8930af4ede9768e90d',
      title: 'Claim the Treasure',
      description: "Retrieve the valuable treasure from the dragon's hoard.",
      code: 'password',
      order: 3,
      image: null,
    },
    {
      id: '40ddd00049e14366af869d38',
      title: 'Return to Town',
      description: 'Safely return to the town and report your success.',
      code: 'password',
      order: 4,
      image: null,
    },
    {
      id: '00dc263f644240aaae310e8b',
      title: 'Celebrate Victory',
      description: 'Enjoy the well-deserved celebration with the townspeople.',
      code: 'password',
      order: 5,
      image: null,
    },
  ],
  createTaskAction: () => new Promise(() => {}),
} satisfies QuestShowProps
