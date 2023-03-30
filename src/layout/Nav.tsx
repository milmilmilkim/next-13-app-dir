'use client';

import Link from 'next/link';
import tw from 'tailwind-styled-components';

const Nav: React.FC = () => {
  return (
    <>
      <StyledTitle>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
      </StyledTitle>
    </>
  );
};

const StyledTitle = tw.h1`
flex
items-center
justify-center
flex-col
w-full
bg-indigo-600`;

export default Nav;
