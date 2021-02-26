/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import Container from './container';

interface IHeader {
  pathname: string;
  title?: string;
  date?: Date;
  articleImage?: string;
}

const header = ({ pathname, title }: IHeader) => {
  switch (pathname) {
    case '/':
      return <HomeHeader />;
    case '/articles/[id]':
      return null;
    default:
      return <PageHeader headingTitle={title} />;
  }
};

export default header;

const HomeHeader = () => (
  <StyledHomeHeading>
    <Container>
      <div className="header-container">
        <h1>Darcy Price</h1>
        <h2>Developer</h2>
        <p className="description">
          Hi! My name is Darcy Price, I am a developer based in Sydney,
          Australia. I love to build modern experiences on the web. I also love
          working on little side projects that help others build things faster
          🙏🏾
        </p>
      </div>
    </Container>
  </StyledHomeHeading>
);

const PageHeader = ({ headingTitle }) => (
  <StyledPageHeading className="page">
    <Container>
      <div className="header-container">
        <h1>{headingTitle}</h1>
      </div>
    </Container>
  </StyledPageHeading>
);

const StyledHomeHeading = styled.div`
  @media (min-width: 1024px) {
    .header-container {
      max-width: 70%;
    }
    .description {
      font-size: 1.2em;
    }
  }

  @media (min-width: 1336px) {
    .header-container {
      max-width: 80%;
    }
  }
`;

const StyledPageHeading = styled.div`
  text-align: center;

  &.page h1 {
    max-width: 80%;
    text-align: center;
    margin: 0 auto 1rem;
  }

  .about-header {
    font-size: 1.75em;
    text-align: center;
    margin: 1.5em 0;
  }

  @media (max-width: 769px) {
    &.page h1 {
      font-size: 2.2em;
    }
  }
`;
