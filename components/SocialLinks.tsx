import React from 'react';
import { GitHubIcon, TwitterIcon, LinkedInIcon } from './Icons';
import Link from '../components/links/Link';

export default function SocialLinks() {
  return (
    <div className="footer-container">
      <ul className="footerSocialLinks">
        <li className="footerSocialLink">
          <Link href="https://github.com/darcydev">
            <GitHubIcon />
          </Link>
        </li>
        <li className="footerSocialLink">
          <Link href="https://linkedin.com/in/darcyprice/">
            <LinkedInIcon />
          </Link>
        </li>
        <li className="footerSocialLink">
          <Link href="https://twitter.com/mrdarcyprice">
            <TwitterIcon />
          </Link>
        </li>
        {/*         <li className="footerSocialLink">
          <ExternalLink href="https://mrdarcyprice.medium.com/">
            <MediumIcon />
          </ExternalLink>
        </li> */}
      </ul>
    </div>
  );
}
