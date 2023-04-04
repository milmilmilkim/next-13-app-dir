import { render, fireEvent } from '@testing-library/react';
import Counter from '@/components/Counter';

describe('Counter 컴포넌트 테스트', () => {
  it('숫자가 1씩 증가한다.', () => {
    const { getByText } = render(<Counter />);
    const button = getByText('+');
    fireEvent.click(button);
    const result = getByText('1');
    expect(result).toBeInTheDocument();
  });

  it('숫자가 1씩 감소한다.', () => {
    const { getByText } = render(<Counter />);
    const button = getByText('-');
    fireEvent.click(button);
    const result = getByText('-1');
    expect(result).toBeInTheDocument();
  });
});
