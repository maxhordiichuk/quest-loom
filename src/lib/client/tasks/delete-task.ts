import axios from 'axios'

import paths from '@/lib/paths'
import type { DeleteTaskResponseBody } from '@/types/requests'

import { unknownError } from '../constants'

export function deleteTask(id: string): Promise<DeleteTaskResponseBody> {
  return new Promise(resolve => {
    axios
      .delete<DeleteTaskResponseBody>(paths.apiDeleteTask(id))
      .then(response => resolve(response.data))
      .catch(error => resolve(error.response?.data || { errors: [unknownError] }))
  })
}
