import React from 'react';

import { Container } from './container';
import {
	GitHubIcon,
	TwitterIcon,
	LinkedInIcon,
	MediumIcon,
	MailIcon,
} from './Icons';
import { LinkExternal } from './LinkExternal';

export default function SocialLinks() {
	return (
		<Container className='footer-container'>
			<ul className='footerSocialLinks'>
				<li className='footerSocialLink'>
					<LinkExternal href='mailto:darcyelsing@gmail.com'>
						<MailIcon />
					</LinkExternal>
				</li>
				<li className='footerSocialLink'>
					<LinkExternal href='https://github.com/darcydev'>
						<GitHubIcon />
					</LinkExternal>
				</li>
				<li className='footerSocialLink'>
					<LinkExternal href='https://linkedin.com/in/darcyprice/'>
						<LinkedInIcon />
					</LinkExternal>
				</li>
				<li className='footerSocialLink'>
					<LinkExternal href='https://twitter.com/mrdarcyprice'>
						<TwitterIcon />
					</LinkExternal>
				</li>
				<li className='footerSocialLink'>
					<LinkExternal href='https://mrdarcyprice.medium.com/'>
						<MediumIcon />
					</LinkExternal>
				</li>
			</ul>
		</Container>
	);
}
