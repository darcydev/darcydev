/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../SocialLinks';

const Footer = () => (
  <StyledFooterSection>
    <SocialLinks />
    <p className="about-site">
      Built with NextJS, TypeScript, Styled Components and Vercel.
    </p>
  </StyledFooterSection>
);

export default Footer;

const StyledFooterSection = styled.footer`
  padding: 30px 0;

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
