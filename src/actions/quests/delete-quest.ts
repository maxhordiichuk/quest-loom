'use server'

import paths from '@/lib/paths'
import { notFound, redirect } from 'next/navigation'

import { getAuthenticatedSession } from '@/lib/auth'

import { deleteQuest as deleteQuestService } from '@/services'
import { fetchQuest } from '@/db/queries'

export async function deleteQuest(formData: FormData) {
  const { user } = await getAuthenticatedSession()
  const id = formData.get('id')

  if (!id || typeof id !== 'string') {
    return notFound()
  }

  const quest = await fetchQuest({ id, userId: user.id })

  if (!quest) {
    return notFound()
  }

  try {
    await deleteQuestService(quest)
  } catch (error) {
    console.error(error)
  }

  return redirect(paths.home)
}
