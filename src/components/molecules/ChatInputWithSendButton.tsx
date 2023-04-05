import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import tw from 'tailwind-styled-components';

import { ButtonType } from '@/types/components/atoms/Button';

const ChatInputWithSendButton: React.FC = () => {
  return (
    <StyledContainer>
      <StyledInput /> <StyledButton buttonType={ButtonType.Primary}>전송</StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = tw.div`
flex
space-x-2  flex-row
w-96
h-10
`;

const StyledInput = tw(Input)`
w-1
`;

const StyledButton = tw(Button)`
min-w-6
h-auto
min-h-6
`;
export default ChatInputWithSendButton;
