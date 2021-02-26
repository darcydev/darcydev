import React from 'react';
import Container from '../layout/container';
import { StyledPageHeading } from '../styles/header.styles';

interface IPageHeader extends React.HTMLAttributes<HTMLHeadingElement> {
  headingTitle: string;
}

const PageHeader = ({ headingTitle }: IPageHeader) => (
  <StyledPageHeading className="page">
    <Container>
      <div className="header-container">
        <h1>{headingTitle}</h1>
      </div>
    </Container>
  </StyledPageHeading>
);

export default PageHeader;
