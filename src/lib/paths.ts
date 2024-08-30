export default {
  home: '/quests',
  apiUpload: '/api/upload',
  signIn: '/api/auth/signin',
  questNew: '/quests/new',
  questList: '/quests',
  questEdit: (questId: string) => `/quests/${questId}/edit`,
  questShow: (questId: string) => `/quests/${questId}`,
}
