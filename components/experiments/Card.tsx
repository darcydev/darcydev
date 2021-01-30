import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import { ExternalLink as ExternalLinkIcon } from 'react-feather';

import Tag from './Tag';
import { LinkExternal } from '../LinkExternal';
import { formatDate } from '../../utils/formateDate';

interface Props {
	experiment: {
		title: string;
		description: string;
		createdAt: string;
		externalUrl: string;
		tags: string[];
	};
}

const Card = ({ experiment }: Props) => {
	const { title, description, createdAt, tags, externalUrl } = experiment;

	return (
		<StyledTilter>
			<LinkExternal href={`${externalUrl}`}>
				<>
					<div className='experiment-meta'>
						<time className='experiment-date'>{formatDate(createdAt)}</time>
						<span>
							<ExternalLinkIcon />
						</span>
					</div>
					<h3 className='experiment-item-heading'>{title}</h3>
					<p>{description}</p>
					<ul>
						{tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</ul>
				</>
			</LinkExternal>
		</StyledTilter>
	);
};

const StyledTilter = styled(Tilt)`
	padding: 40px 0;
	background: #202020;
	margin-bottom: 0.75em;
	border-radius: 4px;
	padding: 0.75em;
	cursor: pointer;

	@media all and (min-width: 540px) {
		margin: 0 0.5em 1em;
		flex: 1 1 40%;
	}

	@media all and (min-width: 1024px) {
		flex: 1 30%;
	}

	a {
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
		}
	}
`;

export default Card;