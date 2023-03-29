import { render, screen } from '@testing-library/react';
import Test from '@/components/Test';

import '@testing-library/jest-dom';

describe('Home', () => {
  it('그냥 이 컴포넌트를 렌더링한다', () => {
    const { getByText } = render(<Test />);

    expect(getByText('테스트 컴포넌트')).toBeInTheDocument();
  });
});
