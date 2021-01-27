import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Layout, Container } from '../components';
import { StyledIndexPage } from '../components/styles/home.styles';
import ExperimentsSection from '../components/experiments';

//@ts-ignore
const Index: FC = () => {
	const { pathname } = useRouter();

	return (
		<Layout pathname={pathname} pageTitle='Darcy Price Portfolio'>
			<StyledIndexPage>
				<StyledDesignSection>
					<Container className='container'>
						<div className='text'>
							<h2>Code</h2>
							<p>In the last 3 years, I've been a developer.</p>
							<p>
								Most of my everyday work falls in between. Having this
								perspective puts me in a good position to suggest design
								solutions and quickly prototype them with code. And I'm loving
								every part of it!
							</p>
						</div>
						<div className='image'>
							<Image
								src='/images/article-preview.png'
								height={200}
								width={350}
								sizes='(min-width: 759px) 800px'
							/>
						</div>
					</Container>
				</StyledDesignSection>
				<ExperimentsSection />
			</StyledIndexPage>
		</Layout>
	);
};

const StyledDesignSection = styled.section`
	background: #fff url('/images/background-pattern.jpg');
	padding: 40px 0;

	p:nth-child(2) {
		margin-bottom: none;
	}

	.container {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.container .text,
	.container .image {
		flex: 1 100%;
	}

	img {
		object-fit: cover;
	}

	h2 {
		font-size: 1.75em;
		color: #000;
		margin-bottom: 1rem;

		@media (min-width: 1024px) {
			font-size: 2.75em;
		}
	}

	p {
		color: #000;
	}

	@media (min-width: 759px) {
		.container .text,
		.container .image {
			flex: 1;
		}
		.text {
			margin-right: 5%;
		}
	}
`;

export default Index;
