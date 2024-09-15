import type { CompleteTaskDialogProps } from '../types'

export default {
  assignmentId: 'e8407da112294795be708033c854fa20',
  completeTask: () => Promise.resolve({}),
} satisfies Omit<CompleteTaskDialogProps, 'children'>
