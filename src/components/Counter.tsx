import { useState, useCallback } from 'react';

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
    <>
      <h1>테스트 컴포넌트</h1>
      <br />
      {number}
      <button onClick={() => handlePlusMinus(plus)}>+</button>
      <button onClick={() => handlePlusMinus(minus)}>-</button>
    </>
  );
};

export default Counter;
