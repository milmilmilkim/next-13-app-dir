'use client';

import Link from 'next/link';
import tw from 'tailwind-styled-components';

const Nav: React.FC = () => {
  return (
    <>
      <StyledTitle>
        <ul className="flex flex-row">
          <li className="px-2">
            <Link href="/">home</Link>
          </li>
          <li className="px-2">
            <Link href="/about">about</Link>
          </li>
        </ul>
      </StyledTitle>
    </>
  );
};

const StyledTitle = tw.h1`
flex
justify-center
flex-col
w-full
h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500

`;

export default Nav;
