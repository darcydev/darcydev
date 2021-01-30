import React from 'react';
import styled from 'styled-components';

import { Container } from '../container';

const HomeHeader = () => (
	<StyledHomeHeading>
		<Container>
			<div className='header-container'>
				<h1>Darcy Price</h1>
				<h2>Full-Stack Developer</h2>
				<p className='description'>
					Hi! My name is Darcy Price, I'm a developer based in Sydney,
					Australia. I love to build modern experiences on the web. I also love
					working on little side projects that help others build things faster
					🙏🏾
				</p>
			</div>
		</Container>
	</StyledHomeHeading>
);

const StyledHomeHeading = styled.div`
	@media (min-width: 1024px) {
		.header-container {
			max-width: 70%;
		}
		.description {
			font-size: 1.2em;
		}
	}

	@media (min-width: 1336px) {
		.header-container {
			max-width: 80%;
		}
	}
`;

export default HomeHeader;
