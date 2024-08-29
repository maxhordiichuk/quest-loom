export default {
  home: '/',
  apiUpload: '/api/upload',
  signIn: '/api/auth/signin',
  questNew: '/quests/new',
  questShow: (questId: string) => `/quests/${questId}`,
}
