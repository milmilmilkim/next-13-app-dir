'use client';

import styled from 'styled-components';
import Link from 'next/link';

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

const StyledTitle = styled.h1`
  background-color: tomato;
`;

export default Nav;
