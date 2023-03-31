import './globals.css';
import StyledComponentsRegistry from '../lib/registry';

import tw from 'tailwind-styled-components';

import Header from '@/layout/Header';
import Nav from '@/layout/Nav';
import Footer from '@/layout/Footer';

export const metadata = {
  title: '나의 넥스트앱',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Header />
          <Container>
            <Nav />
            <Content>{children}</Content>
          </Container>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

const Container = tw.div`
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
`;

const Content = tw.div`
px-3
py-3
`;
