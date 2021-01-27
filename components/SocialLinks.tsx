import React from 'react';

import { Container } from './container';
import { GitHubIcon, CodepenIcon, TwitterIcon } from './Icons';

export default function SocialLinks() {
	return (
		<Container className='footer-container'>
			<ul className='footerSocialLinks'>
				<li className='footerSocialLink'>
					<a
						className='footerLink'
						href='https://github.com/darcydev'
						target='_blank'
						rel='noreferrer noopener'
					>
						<GitHubIcon />
					</a>
				</li>
				<li className='footerSocialLink'>
					<a
						className='footerLink'
						href='https://codepen.io/Vick_onrails'
						target='_blank'
						rel='noreferrer noopener'
					>
						<CodepenIcon />
					</a>
				</li>
				<li className='footerSocialLink'>
					<a
						className='footerLink'
						href='https://twitter.com/vick_onrails'
						target='_blank'
						rel='noreferrer noopener'
					>
						<TwitterIcon />
					</a>
				</li>
			</ul>
		</Container>
	);
}
