import React, { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from '../nav';
import MobileNav from '../nav/mobile-nav';
import NextHead from './NextHead';

interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  pathname: string;
  pageTitle: string;
  pageDescription?: string;
}

const defaultProps: ComponentProps = {
  children: <div>hello</div>,
  pathname: '/',
  pageTitle: 'Darcy Price',
  pageDescription: 'Developer',
};

export const MenuContext = createContext({
  menuOpen: null,
  toggleMenuOpen: null,
});

const Layout: React.FC<ComponentProps> = ({
  children,
  pathname,
  pageTitle,
  pageDescription,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenuOpen = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
      <NextHead pageTitle={pageTitle} pageDescription={pageDescription} />
      <Nav />
      {menuOpen ? (
        <MobileNav />
      ) : (
        <>
          <Header pathname={pathname} title={pageTitle} />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </MenuContext.Provider>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
