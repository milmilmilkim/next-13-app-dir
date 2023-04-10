import tw from 'tailwind-styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <p className="text-white text-center">&copy; 2022 My Website. All rights reserved.</p>
    </StyledFooter>
  );
};

const StyledFooter = tw.footer`
w-full bg-gray-900 text-white text-center p-4
`;
export default Footer;
