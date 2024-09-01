import { QuestListProps } from '../quest-list'

import questImage from './assets/quest-cover.jpg'

export default {
  quests: [
    {
      id: '66d0832be14a7663e71719ab',
      title: "Dragon's Lair",
      description:
        "The village has been terrorized by a fearsome dragon for too long. It's time to take action and put an end to its reign of terror. Gather your courage and venture into the dragon's lair to slay the beast and bring peace back to the land.",
      points: 0,
      isCompleted: false,
      cover: {
        key: 'quest-cover.jpg',
        url: questImage.src,
        width: 1792,
        height: 1024,
      },
    },
    {
      id: '66d0add82d8541cbd52a10be',
      title: 'The Lost Artifact',
      description: 'Recover the ancient artifact from the forgotten temple.',
      points: 0,
      isCompleted: false,
      cover: {
        key: 'quest-cover.jpg',
        url: questImage.src,
        width: 1792,
        height: 1024,
      },
    },
    {
      id: '66d0b0b6e14a7663e71719ac',
      title: 'Enchanted Forest',
      description: 'Navigate through the magical forest and find the hidden glade.',
      points: 0,
      isCompleted: true,
      cover: {
        key: 'quest-cover.jpg',
        url: questImage.src,
        width: 1792,
        height: 1024,
      },
    },
    {
      id: '66d0b0b6e14a7663e71719ad',
      title: 'The Great Heist',
      description: 'Infiltrate the heavily guarded bank and steal the jewels.',
      points: 0,
      isCompleted: false,
      cover: {
        key: 'quest-cover.jpg',
        url: questImage.src,
        width: 1792,
        height: 1024,
      },
    },
  ],
} satisfies QuestListProps
