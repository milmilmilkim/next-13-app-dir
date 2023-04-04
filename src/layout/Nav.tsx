'use client';

import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="max-w-screen-xl mx-auto px-4">
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
