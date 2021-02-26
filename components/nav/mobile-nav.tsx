/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { activeNavItems } from '../../constants/nav';
import NavItem from './NavItem';

const MobileNav = () => (
  <StyledMobileNav>
    <div className="mobile-nav-container">
      <ul>
        {activeNavItems.map((item) => (
          <NavItem key={item.label} href={item.url}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </div>
  </StyledMobileNav>
);

export default MobileNav;

const fadeDown = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: .3;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

const StyledMobileNav = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${fadeDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  .mobile-nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;

    ul {
      list-style-type: none;

      li {
        text-align: center;
        margin-bottom: 1em;
        font-size: 1.5em;
      }
    }
  }
`;
