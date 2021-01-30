import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Layout, Container } from '../components';
import ExperimentCard from '../components/experiments/Card';
import { LinkExternal } from '../components/LinkExternal';
import { getAllExperiments } from '../lib/experiments';

//@ts-ignore
const Index: FC = ({ experiments, preview }) => {
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
				<StyledExperimentsSection>
					<Container>
						<h2>Experiments</h2>
						<p className='section-intro max-width'>
							I try to stage little experiments to help me learn things I find
							interesting. I almost never finish them 🙈. But I learn a lot
							anyways
						</p>
						<section className='experiments'>
							{experiments.map((experiment) => (
								<ExperimentCard key={experiment.id} experiment={experiment} />
							))}
						</section>
					</Container>
				</StyledExperimentsSection>
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
	padding: 60px 0;

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

const StyledExperimentsSection = styled.section`
	margin-top: 40px;
	margin-bottom: 40px;

	h2 {
		font-size: 1.75em;
		margin-bottom: 1rem;
	}

	.section {
		display: flex;
		flex-wrap: wrap;
	}

	.experiments {
		display: flex;
		flex-wrap: wrap;
	}

	.experiment-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media all and (min-width: 1020px) {
		h2 {
			font-size: 2.75em;
		}
	}
`;

export const getStaticProps = async ({ preview = false }) => {
	const experiments = (await getAllExperiments(preview)) || [];

	return {
		props: { experiments, preview },
		revalidate: 1,
	};
};

export default Index;
