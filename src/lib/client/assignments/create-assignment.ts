import axios from 'axios'

import paths from '@/lib/paths'
import type { CreateAssignmentResponseBody } from '@/types/requests'

import { unknownError } from '../constants'

export function createAssignment(questId: string): Promise<CreateAssignmentResponseBody> {
  return new Promise(resolve => {
    axios
      .post<CreateAssignmentResponseBody>(paths.apiAssignmentCreate(questId))
      .then(response => resolve(response.data))
      .catch(error => resolve(error.response?.data || { errors: [unknownError] }))
  })
}
