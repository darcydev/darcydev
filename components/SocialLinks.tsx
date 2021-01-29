import React from 'react';

import { Container } from './container';
import NextLink from './NextLink';
import { GitHubIcon, TwitterIcon, LinkedInIcon } from './Icons';

export default function SocialLinks() {
	return (
		<Container className='footer-container'>
			<ul className='footerSocialLinks'>
				<li className='footerSocialLink'>
					<NextLink href='https://github.com/darcydev' newTab={true}>
						<GitHubIcon />
					</NextLink>
				</li>
				<li className='footerSocialLink'>
					<NextLink href='https://linkedin.com/in/darcyprice/' newTab={true}>
						<LinkedInIcon />
					</NextLink>
				</li>
				<li className='footerSocialLink'>
					<NextLink href='https://twitter.com/darcydev' newTab={true}>
						<TwitterIcon />
					</NextLink>
				</li>
			</ul>
		</Container>
	);
}
