import React, { useContext } from 'react';

import { NavSection, StyledHamburger } from './styles/nav.styles';
import Logo from './logo';
import { Container } from './container';
import SiteConfig from '../config/index.json';
import { MenuContext } from '.';
import NextLink from './NextLink';
import { activeNavItems } from '../constants/nav';

const Nav = () => {
	const menuContext = useContext(MenuContext);

	const { toggleMenuOpen, menuOpen } = menuContext;

	return (
		<NavSection>
			<Container>
				<nav className='navWrapper'>
					<div className='navLeft'>
						<NextLink href='/'>
							<Logo />
							<span>{SiteConfig.author.name}</span>
						</NextLink>
					</div>

					<div className='navRight'>
						<StyledHamburger
							menuOpen={menuOpen}
							onClick={toggleMenuOpen}
						></StyledHamburger>

						<ul className='navLinkList'>
							{activeNavItems.map((item) => (
								<li className='navLinkItem'>
									<NextLink href={item.url}>{item.label}</NextLink>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</Container>
		</NavSection>
	);
};

export default Nav;
