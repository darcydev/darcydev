import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';

import { Layout, Container } from '../components';

const About = () => {
	const { pathname } = useRouter();

	return (
		<Layout
			pathname={pathname}
			pageTitle='About'
			pageDescription='About page of Portfolio by Darcy Price, Software Developer in Australia'
		>
			<StyledSection>
				<Container width='narrow'>
					<div className='postContent'>
						<div className='avatarImage'>
							<Image src='/images/avatar.jpg' width={200} height={200} />
						</div>
						<p>
							I'm{' '}
							<a
								href='https://twitter.com/mrdarcyprice'
								target='_blank'
								rel='noopenner noreferrer'
							>
								@Darcy
							</a>
							, a Full-Stack Developer who loves to build fast and delightful
							experiences on the web. I'm also passionate about building
							performant, decoupled, testable and maintainable code. I have a
							keen interested in open source and learning new technologies.
						</p>
						<p>
							Aside from my day job, I work on a few side projects to help
							designers and engineers build with speed.
						</p>
						<p>
							I work heavily with ReactJS, Redux, Styled Components, NextJS,
							Drupal, NodeJS, PHP. If you're excited about any of the following,
							shoot at me on{' '}
							<a
								href='https://twitter.com/mrdarcyprice'
								target='_blank'
								rel='noopenner noreferrer'
							>
								Twitter
							</a>{' '}
							and let's build together! 😊
						</p>
					</div>
				</Container>
			</StyledSection>
		</Layout>
	);
};

const StyledSection = styled.section`
	.postContent {
		display: flex;
		flex-direction: column;
		text-align: center;

		.avatarImage {
			margin: 0 0 1.5em 0;

			img {
				border-radius: 100%;
				height: 150px;
				width: 150px;

				@media (min-width: 759px) {
					height: 200px;
					width: 200px;
				}

				@media (min-width: 1400px) {
					width: 210px;
				}
			}
		}
	}
`;

export default About;
