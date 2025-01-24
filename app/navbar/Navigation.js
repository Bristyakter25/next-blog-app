"use client"; // Enable client-side rendering for hooks
import Link from "next/link";
import { useKindeAuth, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

function Navigation() {
  const { isAuthenticated } = useKindeAuth();

  return (
    <nav className="bg-violet-200 p-5">
      <ul className="flex gap-6 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <LogoutLink className="bg-red-500 text-white px-4 py-2 rounded">
              Logout
            </LogoutLink>
          </li>
        ) : (
          <li>
            <LoginLink className="bg-blue-500 text-white px-4 py-2 rounded">
              Login
            </LoginLink>
          </li>
        )}
        
      </ul>
    </nav>
  );
}

export default Navigation;
