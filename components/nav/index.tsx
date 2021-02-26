/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../layout/Layout';
import Container from '../layout/Container';
import { InternalLink } from '../Link';
import Hamburger from './Hamburger';
import activeNavItems from '../../constants/nav';
import NavItem from './NavItem';

const Nav = () => {
  const menuContext = useContext(MenuContext);

  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <nav className="navWrapper">
          <div className="navLeft">
            <InternalLink href="/">
              <span>Darcy Price</span>
            </InternalLink>
          </div>

          <div className="navRight">
            <Hamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />
            <ul className="navLinkList">
              {activeNavItems.map((item) => (
                <NavItem key={item.label} href={item.url}>
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </NavSection>
  );
};

export default Nav;

const NavSection = styled.header`
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 5em;
  position: relative;
  z-index: 10;

  .no-underline {
    color: var(--text-color-dark);

    &:hover {
      color: #fff;
    }
  }

  .navLeft {
    a {
      text-decoration: none;
      text-transform: uppercase;

      span {
        font-size: 1.25em;
      }
    }
  }

  .navRight {
    position: relative;
  }

  .navWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navHomeLink {
    display: inline-flex;
    align-items: center;
    text-decoration: none;

    &:hover {
    }
  }

  .navLinkList {
    display: none;
    list-style: none;
  }

  @media (min-width: 759px) {
    margin-bottom: 5em;

    .navLinkList {
      display: flex;
    }
  }
`;
