import { PropsWithChildren } from 'react';
import { ButtonProps, ButtonType } from '@/types/components/atoms/Button';
import tw from 'tailwind-styled-components';

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, ...args }) => {
  const { buttonType = ButtonType.Primary } = args;

  return <StyledButton buttonType={buttonType}>{children || '기본 버튼'}</StyledButton>;
};

const StyledButton = tw.button<ButtonProps>`
  text-white font-bold py-2 px-4 rounded
  ${(props) => {
    switch (props.buttonType) {
      case ButtonType.Primary:
        return 'bg-indigo-600';
      case ButtonType.Secondary:
        return 'bg-rose-400';
      default:
        return 'bg-rose-400';
    }
  }}
`;
export default Button;
