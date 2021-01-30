import React from 'react';
import styled from 'styled-components';
import { GitHub, Codepen, ExternalLink } from 'react-feather';

import { Tilter } from './styles/experiments.styles';

const ExperimentItem = ({ experiment }) => {
	let icon;

	switch (experiment.location) {
		case 'codepen':
			icon = <CodepenIcon role='img' />;
			break;
		case 'github':
			icon = <GithubIcon role='img' />;
			break;
		case 'medium':
		default:
			icon = <ExternalLinkIcon role='img' />;
	}

	return (
		<Tilter options={{ scale: 1, speed: 200 }}>
			<StyledExperimentItemContainer
				className='experiments-container'
				href={experiment.link}
				rel='noopener noreferrer'
				target='_blank'
			>
				<div className='experiment-meta'>
					<time className='experiment-date'>{experiment.date}</time>
					<span>{icon}</span>
				</div>
				<h3 className='experiment-item-heading'>{experiment.title}</h3>
				<p>{experiment.description}</p>
				<ul>
					{experiment.tags.map((tag, index) => (
						<li key={index}>{tag}</li>
					))}
				</ul>
			</StyledExperimentItemContainer>
		</Tilter>
	);
};

const GithubIcon = styled(GitHub)`
	height: 0.8em;
	width: 0.8em;
	color: #777;
`;

const CodepenIcon = styled(Codepen)`
	height: 0.8em;
	width: 0.8em;
	color: #777;
`;
const ExternalLinkIcon = styled(ExternalLink)`
	height: 0.8em;
	width: 0.8em;
	color: #777;
`;

const StyledExperimentItemContainer = styled.a`
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}

	time {
		font-size: 0.75em;
		color: #808080;
	}

	h3 {
		margin-bottom: 0.5em;
		font-size: 1em;
	}

	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;

		li {
			display: inline-block;
			border: 1px solid #bf360c;
			padding: 0.2em 0.75em;
			color: #bf360c;
			font-size: 0.75em;
			margin: 4px;
		}
	}
`;

export default ExperimentItem;
