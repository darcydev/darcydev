import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactElement;
}

const ArticlesWrap = ({ children }: Props) => (
  <StyledCards>{children}</StyledCards>
);

const StyledCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export default ArticlesWrap;
