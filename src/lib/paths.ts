export default {
  home: '/quests',
  apiAuthSignIn: '/api/auth/signin/email',
  apiAssignments: '/api/assignments',
  apiUpload: '/api/upload',
  signIn: '/auth/login',
  verifyRequest: '/auth/verify-request',
  assignmentShow: (assignmentId: string) => `/assignments/${assignmentId}`,
  questNew: '/quests/new',
  questList: '/quests',
  questEdit: (questId: string) => `/quests/${questId}/edit`,
  questShow: (questId: string) => `/quests/${questId}`,
  taskShow: (taskId: string) => `/tasks/${taskId}`,
}
