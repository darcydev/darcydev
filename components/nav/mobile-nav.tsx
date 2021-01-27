import React from 'react';

import NextLink from '../NextLink';
import { activeNavItems } from '../../constants/nav';
import { StyledMobileNav } from '../styles/nav.styles';

const MobileNav = () => {
	return (
		<StyledMobileNav>
			<div className='mobile-nav-container'>
				<ul className='linkList'>
					{activeNavItems.map((item) => (
						<li className='listItem'>
							<NextLink href={item.url}>{item.label}</NextLink>
						</li>
					))}
				</ul>
			</div>
		</StyledMobileNav>
	);
};

export default MobileNav;
