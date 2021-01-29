import React from 'react';
import { useRouter } from 'next/router';

import { Layout, Container } from '../../components';
import { ProjectPreview } from '../../components/projects/ProjectPreview';
import { getAllProjects } from '../../lib/projects';
import { StyledCards } from '../../components/styles/cards.styles';

const Work = ({ projects }) => {
	const { pathname } = useRouter();

	return (
		<Layout
			pathname={pathname}
			pageTitle='Works & Projects'
			pageDescription='Works and projects spanning Product design, Research, frontend and software engineering with ReactJS, React Native and NodeJs'
		>
			<Container>
				<p className='page-intro'>
					Selected works I'm proud of. Ranging from Software Engineering and
					Product Design.
				</p>
				<StyledCards>
					{projects.map((project) => (
						<ProjectPreview project={project} />
					))}
				</StyledCards>
			</Container>
		</Layout>
	);
};

export const getStaticProps = async ({ preview = false }) => {
	const projects = (await getAllProjects(preview)) || [];

	return {
		props: { projects, preview },
		revalidate: 1,
	};
};

export default Work;
