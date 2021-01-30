import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
	children: string;
}

const Tag = ({ children }: Props) => {
	return <StyledLi>{children}</StyledLi>;
};

const StyledLi = styled.li`
	display: inline-block;
	border: 1px solid #bf360c;
	padding: 0.2em 0.75em;
	color: #bf360c;
	font-size: 0.75em;
	margin: 4px;
	text-transform: uppercase;
`;

export default Tag;
