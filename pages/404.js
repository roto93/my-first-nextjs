import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])
  return (
    <div>
      <h1>Ooooops</h1>
      <h2>This page cannot be found</h2>
      <p>Go back to the <Link href={'/'}>Homepage</Link></p>
    </div>
  )
}

export default NotFound