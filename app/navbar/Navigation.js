import Link from 'next/link'
import React from 'react'

function Navigation () {
  return (
    <nav className="bg-violet-200 p-5">
          <ul className="flex gap-6 justify-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </nav>
  )
}

export default Navigation