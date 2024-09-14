import axios from 'axios'

import paths from '@/lib/paths'
import { unknownError } from '@/client/constants'
import type { DeleteQuestResponseBody } from '@/types/requests'

export function deleteQuest(id: string): Promise<DeleteQuestResponseBody> {
  return new Promise(resolve => {
    axios
      .delete<DeleteQuestResponseBody>(paths.apiQuest(id))
      .then(response => resolve(response.data))
      .catch(error => resolve(error.response?.data || { errors: [unknownError] }))
  })
}
