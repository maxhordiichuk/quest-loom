import axios from 'axios'

import paths from '@/lib/paths'
import type { CreateQuestRequestBody, CreateQuestResponseBody } from '@/types/requests'

import { unknownError } from '../constants'

export function createQuest(body: CreateQuestRequestBody): Promise<CreateQuestResponseBody> {
  return new Promise(resolve => {
    axios
      .post<CreateQuestResponseBody>(paths.apiQuests, body)
      .then(response => resolve(response.data))
      .catch(error => resolve(error.response?.data || { errors: { root: [unknownError] } }))
  })
}
