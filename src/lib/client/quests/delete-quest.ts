import axios from 'axios'

import paths from '@/lib/paths'
import type { DeleteQuestResponseBody } from '@/types/requests'

import { unknownError } from '../constants'

export function deleteQuest(id: string): Promise<DeleteQuestResponseBody> {
  return new Promise(resolve => {
    axios
      .delete<DeleteQuestResponseBody>(paths.apiDeleteQuest(id))
      .then(response => resolve(response.data))
      .catch(error => resolve(error.response?.data || { errors: [unknownError] }))
  })
}
