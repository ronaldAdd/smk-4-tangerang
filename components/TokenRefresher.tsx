import { useEffect } from 'react'
import { onIdTokenChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function TokenRefresher() {
  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken()
        document.cookie = `__session=${token}; path=/; max-age=3600; Secure; SameSite=Lax`
      } else {
        document.cookie = `__session=; path=/; max-age=0; Secure; SameSite=Lax`
      }
    })

    const interval = setInterval(async () => {
      const user = auth.currentUser
      if (user) {
        const token = await user.getIdToken(true)
        document.cookie = `token=${token}; path=/; max-age=3600; Secure; SameSite=Lax`
      }
    }, 10 * 60 * 1000)

    return () => {
      unsubscribe()
      clearInterval(interval)
    }
  }, [])

  return null
}
