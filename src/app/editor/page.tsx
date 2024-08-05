import { auth } from "@/../auth"
import Link from 'next/link'
 
export default async function Editor() {
  const session = await auth()

  if (!session) return null
 
  if (!session.user) return null
 
  return (
    <div>
      <div>
        <p>{session.user.name}</p>
      </div>
      <div>
        <Link href="/editor/post">Post</Link>
      </div>
    </div>
  )
}