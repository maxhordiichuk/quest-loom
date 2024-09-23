export default {
  home: '/quests',
  apiAssignmentCreate: (questId: string) => `/api/quests/${questId}/assignments`,
  apiAuthSignIn: '/api/auth/signin/email',
  apiQuestCreate: '/api/quests',
  apiQuestDelete: (questId: string) => `/api/quests/${questId}`,
  apiQuestUpdate: (questId: string) => `/api/quests/${questId}`,
  apiTaskCreate: (questId: string) => `/api/quests/${questId}/tasks`,
  apiTaskDelete: (taskId: string) => `/api/tasks/${taskId}`,
  apiTaskMove: (taskId: string) => `/api/tasks/${taskId}/move`,
  apiTaskUpdate: (taskId: string) => `/api/tasks/${taskId}`,
  apiUpload: '/api/upload',
  assignmentShow: (assignmentId: string) => `/assignments/${assignmentId}`,
  authSignIn: '/auth/login',
  authVerifyRequest: '/auth/verify-request',
  questEdit: (questId: string) => `/quests/${questId}/edit`,
  questList: '/quests',
  questNew: '/quests/new',
  questPreview: (questId: string) => `/quests/${questId}/preview`,
  questShow: (questId: string) => `/quests/${questId}`,
  taskShow: (taskId: string) => `/tasks/${taskId}`,
}
