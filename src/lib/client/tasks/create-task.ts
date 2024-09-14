import axios from 'axios'

import paths from '@/lib/paths'
import type { CreateTaskRequestBody, CreateTaskResponseBody } from '@/types/requests'

import { unknownError } from '../constants'

export function createTask(
  questId: string,
  body: CreateTaskRequestBody
): Promise<CreateTaskResponseBody> {
  return new Promise(resolve => {
    axios
      .post<CreateTaskResponseBody>(paths.apiTaskCreate(questId), body)
      .then(response => resolve(response.data))
      .catch(error => resolve(error.response?.data || { errors: { root: [unknownError] } }))
  })
}
