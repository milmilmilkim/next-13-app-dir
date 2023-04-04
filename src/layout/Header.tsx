import tw from 'tailwind-styled-components';
import Nav from './Nav';
const Header = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = tw.header`
bg-gray-800 p-4
`;
