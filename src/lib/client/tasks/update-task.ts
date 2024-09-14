import axios from 'axios'

import paths from '@/lib/paths'
import type { UpdateTaskRequestBody, UpdateTaskResponseBody } from '@/types/requests'

import { unknownError } from '../constants'

export function updateTask(
  id: string,
  body: UpdateTaskRequestBody
): Promise<UpdateTaskResponseBody> {
  return new Promise(resolve => {
    axios
      .put<UpdateTaskResponseBody>(paths.apiTaskUpdate(id), body)
      .then(response => resolve(response.data))
      .catch(error => resolve(error.response?.data || { errors: { root: [unknownError] } }))
  })
}
