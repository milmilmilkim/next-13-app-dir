'use client';

import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-2">
      <ul className="flex justify-start space-x-4 pl-4">
        <li className="text-white">
          <Link href="/">home</Link>
        </li>
        <li className="text-white">
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
