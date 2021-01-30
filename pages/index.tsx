import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Layout, Container } from '../components';
import ExperimentsSection from '../components/experiments';
import { LinkExternal } from '../components/LinkExternal';

//@ts-ignore
const Index: FC = () => {
	const { pathname } = useRouter();

	return (
		<Layout pathname={pathname} pageTitle='Darcy Price'>
			<StyledIndexPage>
				<StyledDesignSection>
					<Container className='container'>
						<div className='text'>
							<h2>Code as a Craft 👨‍🔧</h2>
							<p>
								I strive to continually craft my skills as a developer to build
								incredible products. I am particularly passionate about crafting
								reusable, decoupled, performant and maintainable code.
							</p>
							<p>
								Inspired by the{' '}
								<LinkExternal href='https://github.com/getify/You-Dont-Know-JS'>
									<span>YDKJS series</span>
								</LinkExternal>
								, I have crafted the ability to write components in vanilla ES6
								JavaScript, but can leverage existing libraries when it makes
								sense to do so.
							</p>
							<p>
								Fundamentally, I possess an ability and willingness to learn new
								programming languages, frameworks and paradigms.
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

const StyledIndexPage = styled.section`
	h1 {
		word-spacing: -10px;
	}

	@media (min-width: 1024px) {
		h1 {
			word-spacing: -20px;
		}
	}
`;

const StyledDesignSection = styled.section`
	background: #fff url('/images/background-pattern.jpg');
	padding: 40px 0;

	.container {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.container .text,
	.container .image {
		flex: 1 100%;

		@media (min-width: 759px) {
			flex: 1;

			.text {
				margin-right: 5%;
			}
		}
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
		background: #fff;

		&:last-child {
			margin-bottom: 0;
		}
	}

	a {
		&:hover {
			color: inherit;
		}
	}
`;

export default Index;
