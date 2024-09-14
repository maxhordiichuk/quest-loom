import axios from 'axios'

import paths from '@/lib/paths'
import type { MoveTaskRequestBody, MoveTaskResponseBody } from '@/types/requests/move-task'

import { unknownError } from '../constants'

export function moveTask(id: string, body: MoveTaskRequestBody): Promise<MoveTaskResponseBody> {
  return new Promise(resolve => {
    axios
      .post<MoveTaskResponseBody>(paths.apiMoveTask(id), body)
      .then(response => resolve(response.data))
      .catch(error => resolve(error.response?.data || { errors: { root: [unknownError] } }))
  })
}
