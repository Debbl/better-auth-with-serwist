'use client'
import { ThemeSwitcher } from '~/components/theme-switcher'
import { signIn, signOut, useSession } from '~/lib/auth-client'

export default function Home() {
  const { data: session } = useSession()

  return (
    <main className='flex h-full flex-col items-center justify-center gap-y-4'>
      <motion.div
        className='size-16 rounded-md border bg-blue-600'
        whileHover={{ scale: 1.1, rotate: '360deg' }}
      />

      <p>{session?.user?.email}</p>

      {session ? (
        <button type='button' onClick={() => signOut()}>
          Sign out
        </button>
      ) : (
        <button
          type='button'
          onClick={() =>
            signIn.social({
              provider: 'github',
              callbackURL: '/dashboard',
            })
          }
        >
          Sign in with Github
        </button>
      )}

      <ThemeSwitcher />
    </main>
  )
}
