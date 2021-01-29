import React from 'react';
import Image from 'next/image';

import { Date } from '../Date';
import NextLink from '../NextLink';

interface IProjectPreview {
	project: {
		id: string;
		createdAt: string;
		title: string;
		description: string;
		externalUrl: string;
		coverImage: { url: string };
	};
}

const ProjectPreview = ({ project }: IProjectPreview) => {
	return (
		<article className='article' key={project.id}>
			<NextLink href={`https://${project.externalUrl}`} newTab={true}>
				<a>
					<Image
						src={project.coverImage.url}
						alt={project.title}
						width={450}
						height={220}
						sizes='(min-width: 640px) 700px, 400px'
					/>
					<Date date={project.createdAt} />
					<h2>{project.title}</h2>
					<p>{project.description}</p>
				</a>
			</NextLink>
		</article>
	);
};

export { ProjectPreview };
