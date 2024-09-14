import axios from 'axios'

import paths from '@/lib/paths'
import { unknownError } from '@/client/constants'
import type { UpdateQuestRequestBody, UpdateQuestResponseBody } from '@/types/requests'

export function updateQuest(
  id: string,
  body: UpdateQuestRequestBody
): Promise<UpdateQuestResponseBody> {
  return new Promise(resolve => {
    axios
      .put<UpdateQuestResponseBody>(paths.apiQuest(id), body)
      .then(response => resolve(response.data))
      .catch(error => resolve(error.response?.data || { errors: { root: [unknownError] } }))
  })
}
