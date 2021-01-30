import styled, { css } from 'styled-components';
import { GitHub, Codepen, Twitter, Linkedin } from 'react-feather';
import { AiOutlineMedium } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

const IconStyles = css`
	height: 1.2em;
	width: 1.2em;
`;

export const GitHubIcon = styled(GitHub)`
	${IconStyles}
`;

export const TwitterIcon = styled(Twitter)`
	${IconStyles}
`;

export const CodepenIcon = styled(Codepen)`
	${IconStyles}
`;

export const LinkedInIcon = styled(Linkedin)`
	${IconStyles}
`;

export const MediumIcon = styled(AiOutlineMedium)`
	${IconStyles}
`;

export const MailIcon = styled(HiOutlineMail)`
	${IconStyles}
`;
