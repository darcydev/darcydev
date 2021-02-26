import React from 'react';
import styled from 'styled-components';

import Container from './container';
import SocialLinks from '../SocialLinks';

const StyledFooterSection = styled.footer`
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footerSocialLinks {
    display: flex;
    margin: auto;
    margin-bottom: 1em;
  }

  .footerSocialLink {
    display: block;
    margin-right: 0.5em;
  }

  .about-site {
    text-align: center;
    max-width: 400px;
    font-size: 0.9em;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Footer = () => (
  <StyledFooterSection>
    <SocialLinks />
    <Container>
      <p className="about-site">
        Built with NextJS, TypeScript, Styled Components and Vercel.
      </p>
    </Container>
  </StyledFooterSection>
);

export default Footer;
