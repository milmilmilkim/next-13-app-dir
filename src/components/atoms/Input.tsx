import tw from 'tailwind-styled-components';

interface InputProps {
  maxLength?: number;
  inputType?: 'text' | 'number' | 'email';
}

const Input: React.FC<InputProps> = (props) => {
  const { inputType = 'text', maxLength } = props;

  return <StyledInput type={inputType} maxLength={maxLength} />;
};

const StyledInput = tw.input<InputProps>`
border w-full p-1 rounded-lg border-pink-500 focus:outline-pink-500 caret:pink-500 focus:caret-indigo-500`;

export default Input;
