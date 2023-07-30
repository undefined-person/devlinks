'use client'

import { signIn, signOut, useSession } from "next-auth/react"

const SignInPage = () => {
  const { data: session } = useSession()

  const handleLogin = async () => {
    await signIn('credentials', {
      email: 'user@example.com', // Replace this with actual email and password
      password: 'yourpassword',
      redirect: false,
    })
  }

  return (
    <div>
      {!session ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <div>
          <p>Welcome, {session.user.email}!</p>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default SignInPage