import axios from 'axios'

import paths from '@/lib/paths'
import { unknownError } from '@/client/constants'
import type { CreateTaskRequestBody, CreateTaskResponseBody } from '@/types/requests'

export function createTask(
  questId: string,
  body: CreateTaskRequestBody
): Promise<CreateTaskResponseBody> {
  return new Promise(resolve => {
    axios
      .post<CreateTaskResponseBody>(paths.apiCreateTask(questId), body)
      .then(response => resolve(response.data))
      .catch(error => resolve(error.response?.data || { errors: { root: [unknownError] } }))
  })
}
