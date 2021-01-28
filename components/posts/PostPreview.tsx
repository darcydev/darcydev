import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { Date } from '../Date';

interface IPostPreview {
	post: {
		title: string;
		id: string;
		slug: string;
		createdAt: string;
		coverImage: { url: string };
		description: string;
	};
}

const PostPreview = ({ post }: IPostPreview) => {
	return (
		<article className='article' key={post.id}>
			<Link href={`/articles/${post.slug}`}>
				<a>
					{/* @ts-ignore */}
					<Image
						src={post.coverImage.url}
						alt={post.title}
						width={450}
						height={220}
						sizes='(min-width: 640px) 700px, 400px'
					/>
					<Date date={post.createdAt} />
					<h2>{post.title}</h2>
					<p>{post.description}</p>
				</a>
			</Link>
		</article>
	);
};

export { PostPreview };
