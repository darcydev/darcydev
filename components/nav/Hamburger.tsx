import React, { useState, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IStyledHamburger extends HTMLAttributes<HTMLButtonElement> {
	menuOpen: boolean;
	onClick: any;
}

const Hamburger = ({ menuOpen, onClick }: IStyledHamburger) => {
	return <StyledHamburger menuOpen={menuOpen} onClick={() => onClick()} />;
};

const StyledHamburger = styled.button<IStyledHamburger>`
	height: 2em;
	width: 2em;
	background: inherit;
	display: block;
	padding: 0.5em;
	border: 1px solid #fff;
	outline: none;
	position: relative;
	border: none;
	border-radius: 50%;
	cursor: pointer;

	&::before,
	&::after {
		content: '';
		background: #fff;
		height: 2px;
		width: 100%;
		position: absolute;
		display: block;
		right: 0;
		transition: all 0.25s;
	}

	&:active,
	&:focus {
		outline-color: #fff;
	}

	&::before {
		top: ${({ menuOpen }) => (menuOpen ? '12px' : '8px')};
		transform: ${({ menuOpen }) => (menuOpen ? 'rotate(40deg)' : null)};
	}

	&::after {
		width: ${({ menuOpen }) => (menuOpen ? '100%' : '80%')};
		bottom: ${({ menuOpen }) => (menuOpen ? '12px' : '8px')};
		transform: ${({ menuOpen }) => (menuOpen ? 'rotate(-40deg)' : null)};
	}

	@media all and (min-width: 1024px) {
		display: none;
	}
`;

export default Hamburger;
