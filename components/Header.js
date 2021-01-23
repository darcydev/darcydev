import styled from 'styled-components';

import LinkComponent from './Link';
import { activeNavItems } from '../constants/nav';

export default function Header() {
	return (
		<StyledHeader>
			<div className='logo-wrp'>
				<LinkComponent href='/'>Darcy Price</LinkComponent>
			</div>
			<div className='nav-wrp'>
				<nav>
					<ul>
						{activeNavItems.map((item) => (
							<li>
								<LinkComponent key={item.label} href={`/${item.url}`}>
									{item.label}
								</LinkComponent>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	background: #2a2f4a;
	width: 100%;
	padding: 30px 0;
	justify-content: space-between;
	border-bottom: 1px solid #fff;

	.logo-wrp {
		padding-left: 20px;
		color: #fff;
		font-size: 24px;
		font-weight: 500;
		text-transform: uppercase;
	}

	.nav-wrp {
		flex: 1;
		text-align: right;
		padding-right: 20px;

		ul {
			display: flex;
			justify-content: flex-end;

			li {
				margin: 0 10px;

				:first-child {
					margin-left: 0;
				}

				:last-child {
					margin-right: 0;
				}

				a {
					text-transform: uppercase;
					color: #fff;
					font-size: 20px;
					font-weight: 400;
				}
			}
		}
	}
`;
