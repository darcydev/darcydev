import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Layout, Container } from '../components';
import ExperimentsSection from '../components/experiments';

//@ts-ignore
const Index: FC = () => {
	const { pathname } = useRouter();

	return (
		<Layout pathname={pathname} pageTitle='Darcy Price'>
			<StyledIndexPage>
				<StyledDesignSection>
					<Container className='container'>
						<div className='text'>
							<h2>Code</h2>
							<p>
								Consequat cupidatat id exercitation ex ut dolor fugiat esse. Ex
								velit sint adipisicing cillum. Ea voluptate in ex aute aliquip
								ut excepteur ex ullamco ullamco.
							</p>
							<p>
								Ipsum consequat ex tempor Lorem aliquip officia id mollit anim.
								Do adipisicing ullamco officia aliqua reprehenderit sunt aliquip
								id Lorem consequat nisi sunt non culpa. Velit nostrud tempor
								proident nisi dolore ullamco sit voluptate minim. Nostrud non
								Lorem proident magna esse.
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
