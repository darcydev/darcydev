import React from 'react';
import styled from 'styled-components';
import {
	FaGithub as GitHub,
	FaLinkedin as LinkedIn,
	FaTwitterSquare as Twitter,
	FaFilePdf as PDF,
} from 'react-icons/fa';
import { MdEmail as Mail } from 'react-icons/md';

import LinkComponent from './Link';

export default function SocialLinks() {
	const size: number = 50;
	const color: string = '#000';

	return (
		<StyledContainer className='component--social-links'>
			<ul>
				<li>
					<LinkComponent href='https://github.com/darcydev'>
						<GitHub size={size} color={color} />
					</LinkComponent>
				</li>
				<li>
					<LinkComponent href='https://linkedin.com/in/darcyprice'>
						<LinkedIn size={size} color={color} />
					</LinkComponent>
				</li>
				<li>
					<LinkComponent href='https://twitter.com/mrdarcyprice'>
						<Twitter size={size} color={color} />
					</LinkComponent>
				</li>
				<li>
					<LinkComponent href='mailto:darcyelsing@gmail.com'>
						<Mail size={size} color={color} />
					</LinkComponent>
				</li>
			</ul>
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	ul {
		display: flex;
		flex-wrap: wrap;

		@media (max-width: 500px) {
			flex: 0 0 51%;
		}

		li {
			margin: 0 6px;

			a {
				:first-child {
					margin-left: 0;
				}

				:last-child {
					margin-right: 0;
				}
			}
		}
	}
`;
