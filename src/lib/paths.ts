export default {
  home: '/quests',
  apiUpload: '/api/upload',
  signIn: '/api/auth/signin',
  questNew: '/quests/new',
  questList: '/quests',
  questShow: (questId: string) => `/quests/${questId}`,
}
