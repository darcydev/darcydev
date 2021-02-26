import React from 'react';
import { GitHubIcon, TwitterIcon, LinkedInIcon, MediumIcon } from './Icons';
import { ExternalLink } from './Link';

export default function SocialLinks() {
  return (
    <div className="footer-container">
      <ul className="footerSocialLinks">
        <li className="footerSocialLink">
          <ExternalLink href="https://github.com/darcydev">
            <GitHubIcon />
          </ExternalLink>
        </li>
        <li className="footerSocialLink">
          <ExternalLink href="https://linkedin.com/in/darcyprice/">
            <LinkedInIcon />
          </ExternalLink>
        </li>
        <li className="footerSocialLink">
          <ExternalLink href="https://twitter.com/mrdarcyprice">
            <TwitterIcon />
          </ExternalLink>
        </li>
        <li className="footerSocialLink">
          <ExternalLink href="https://mrdarcyprice.medium.com/">
            <MediumIcon />
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
}
