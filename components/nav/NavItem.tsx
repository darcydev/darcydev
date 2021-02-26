/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { InternalLink } from '../Link';

interface ComponentProps {
  href: string;
  children: React.ReactNode;
}

const componentDefaultProps: ComponentProps = {
  href: '/',
  children: <div>hello</div>,
};

const NavItem = ({ href, children }) => (
  <StyledLi>
    <InternalLink href={href}>{children}</InternalLink>
  </StyledLi>
);

NavItem.defaultProps = componentDefaultProps;

export default NavItem;

const StyledLi = styled.li`
  font-size: 19px;
  margin: 0 10px;

  a {
    text-decoration: none;
  }
`;
