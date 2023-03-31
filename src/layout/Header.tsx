import tw from 'tailwind-styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white font-bold">My Website</h1>
        </div>
        <div>
          <ul className="flex space-x-4 text-white">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = tw.header`
bg-gray-800 p-4
`;
