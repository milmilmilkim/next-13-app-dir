'use client';

import { useState, useCallback } from 'react';
import styled from 'styled-components';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const plus = () => {
    setNumber((number) => number + 1);
  };

  const minus = () => {
    setNumber((number) => number - 1);
  };

  const handlePlusMinus = useCallback((callback: () => void) => {
    callback();
  }, []);

  return (
    <StyledCounter>
      <h1 className="bg-indigo-600">테스트 컴포넌트</h1>
      <br />
      {number}
      <hr />
      <button onClick={() => handlePlusMinus(plus)}>+</button>
      <button onClick={() => handlePlusMinus(minus)}>-</button>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  width: 300px;
`;

export default Counter;
