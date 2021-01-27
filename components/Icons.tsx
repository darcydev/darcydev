import styled, { css } from 'styled-components';
import { GitHub, Codepen, Twitter } from 'react-feather';

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
