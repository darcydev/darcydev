import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Date } from '../Date';
import { InternalLink } from '../Link';

interface iArticleTile {
	post: {
		title: string;
		id: string;
		slug: string;
		createdAt: string;
		coverImage: { url: string };
		description: string;
	};
}

const ArticleTile = ({ post }: iArticleTile) => {
	return (
		<StyledArticle className='article' key={post.id}>
			<InternalLink href={`/articles/${post.slug}`}>
				<div className='img-wrp'>
					<Image
						src={post.coverImage.url}
						alt={post.title}
						width={450}
						height={220}
						sizes='(min-width: 640px) 700px, 400px'
					/>
				</div>
				<div className='txt-wrp'>
					<Date date={post.createdAt} />
					<h2>{post.title}</h2>
					<p>{post.description}</p>
				</div>
			</InternalLink>
		</StyledArticle>
	);
};

const StyledArticle = styled.article`
	flex: 0 0 48%;
	margin: 10px;

	@media (max-width: 650px) {
		flex: 0 0 100%;
		margin: 0;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: none;
		}

		.img-wrp {
			img {
				transition: all var(--animation-duration)
					var(--transition-timing-function);
				object-fit: cover;
				width: 100%;
				object-fit: cover;
				margin-bottom: 0.4em;
				transform: scale(1);
				transition: 5s all;

				&:hover {
					transform: scale(1.1);
				}
			}
		}

		.txt-wrp {
			padding: 15px 0 0 0;

			time {
				color: #808080;
				font-size: 0.9em;
			}

			h2 {
				font-size: 1.17em;
				margin-bottom: 0.3em;

				&:hover {
					color: #fff;
				}
			}

			p {
				&:hover {
					color: var(--text-color-bright);
				}
			}
		}
	}
`;

export { ArticleTile };
