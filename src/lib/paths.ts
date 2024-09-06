export default {
  home: '/quests',
  apiAuthSignIn: '/api/auth/signin/email',
  apiUpload: '/api/upload',
  signIn: '/auth/login',
  verifyRequest: '/auth/verify-request',
  questNew: '/quests/new',
  questList: '/quests',
  questEdit: (questId: string) => `/quests/${questId}/edit`,
  questShow: (questId: string) => `/quests/${questId}`,
  taskShow: (taskId: string) => `/tasks/${taskId}`,
}
