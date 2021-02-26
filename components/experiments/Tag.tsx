/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';

interface ComponentProps {
  children: string;
}

const defaultProps: ComponentProps = {
  children: 'Tag',
};

const Tag: React.FC<ComponentProps> = ({ children }) => (
  <StyledLi>{children}</StyledLi>
);

Tag.defaultProps = defaultProps;

export default Tag;

const StyledLi = styled.li`
  display: inline-block;
  border: 1px solid var(--prim-red);
  padding: 0.2em 0.75em;
  color: var(--prim-red);
  font-size: 0.75em;
  margin: 4px;
  text-transform: uppercase;
`;
