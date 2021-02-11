import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Date } from '../Date';
import { ButtonLink } from '../Button';

interface iArticleTile {
	post: {
		title: string;
		id: string;
		slug: string;
		createdAt: string;
		notionUrl?: string;
		coverImage: { url: string };
		description: string;
	};
}

const ArticleTile = ({ post }: iArticleTile) => {
	return (
		<StyledArticle className='article' key={post.id}>
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
			<div className='cta-wrp'>
				<ButtonLink href={post.notionUrl} newTab={true}>
					<span>Read article</span>
				</ButtonLink>
			</div>
		</StyledArticle>
	);
};

const StyledArticle = styled.article`
	flex: 0 0 48%;
	margin: 10px;
	position: relative;

	@media (max-width: 650px) {
		flex: 0 0 100%;
		margin: 0;
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
		padding: 15px 20px 70px 20px;
		background: #272727;

		time {
			color: #fff;
			font-size: 0.9em;
		}

		h2 {
			font-size: 1.17em;
			margin-bottom: 0.3em;
		}
	}

	.cta-wrp {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
	}
`;

export { ArticleTile };
