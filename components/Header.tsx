import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-full bg-white text-gray-700">
      <nav className="py-4 max-w-xl mx-auto">
        <ul className="flex justify-between">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/api/auth/signin">Sign In</Link>
          </li>
          <li>
            <Link href="/api/auth/signout">Sign Out</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/client">Client</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
