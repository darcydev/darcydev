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
								href='https://twitter.com/vick_OnRails'
								target='_blank'
								rel='noopenner noreferrer'
							>
								@Darcy
							</a>
							, a Designer and Frontend Engineer learning to build fast and
							delightful experiences on the web. I'm also passionate about Web
							Standards, Design Systems and Learning in Public.
						</p>
						<p>
							Aside from my day job, I work on a few side projects to help
							designers and engineers build with speed
						</p>
						<p>
							I work heavily with ReactJs, Redux, Styled Components, Figma,
							Storybook & recently picked up C#/Dotnet Core for backend APIs. If
							you're excited about any of the following, please shoot at me on{' '}
							<a
								href='https://twitter.com/vick_OnRails'
								target='_blank'
								rel='noopenner noreferrer'
							>
								Twitter
							</a>{' '}
							and let's be friends 😊.
						</p>
					</div>
				</Container>
			</StyledSection>
		</Layout>
	);
};

const StyledSection = styled.section`
	.avatarImage {
		margin-right: 0.8em;
		float: left;
		shape-outside: circle();

		img {
			border-radius: 100%;
			height: 150px;
			width: 150px;
		}
	}

	@media (min-width: 759px) {
		.avatarImage {
			margin-right: 1em;
			img {
				height: 200px;
				width: 200px;
			}
		}
	}

	@media (min-width: 1400px) {
		.avatarImage {
			img {
				width: 210px;
			}
		}
	}
`;

export default About;
