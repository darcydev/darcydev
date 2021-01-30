import React, { useContext } from 'react';
import styled from 'styled-components';

import { MenuContext } from '.';
import { Container } from './container';
import LinkInternal from './LinkInternal';
import Hamburger from './nav/Hamburger';
import { activeNavItems } from '../constants/nav';
import SiteConfig from '../config/index.json';

const Nav = () => {
	const menuContext = useContext(MenuContext);

	const { toggleMenuOpen, menuOpen } = menuContext;

	return (
		<NavSection>
			<Container>
				<nav className='navWrapper'>
					<div className='navLeft'>
						<LinkInternal href='/'>
							<p>{SiteConfig.author.name}</p>
						</LinkInternal>
					</div>

					<div className='navRight'>
						<Hamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />
						<ul className='navLinkList'>
							{activeNavItems.map((item) => (
								<li key={item.label} className='navLinkItem'>
									<LinkInternal href={item.url}>{item.label}</LinkInternal>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</Container>
		</NavSection>
	);
};

const NavSection = styled.header`
	padding-top: 1em;
	padding-bottom: 1em;
	margin-bottom: 5em;
	position: relative;
	z-index: 10;

	.no-underline {
		color: var(--text-color-dark);

		&:hover {
			color: #fff;
		}
	}

	.navLeft {
		p {
			margin: 0;
			font-size: 20px;
		}
	}

	.navRight {
		position: relative;
	}

	.navWrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navHomeLink {
		display: inline-flex;
		align-items: center;
		text-decoration: none;

		&:hover {
		}
	}

	.navLinkList {
		display: none;
		list-style: none;

		.navLinkItem {
			margin-right: 0.5em;

			&:last-child {
				margin-right: 0;
			}
		}
	}

	.navLink {
		text-decoration: none;

		&:hover {
		}
	}

	.no-underline {
		display: flex;
		align-items: center;
	}

	@media (min-width: 759px) {
		margin-bottom: 5em;

		.navLinkList {
			display: flex;
		}
	}
`;

export default Nav;
