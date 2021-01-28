import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Layout, Container } from '../../components';
import { Date } from '../../components/Date';
import { StyledContent } from '../../components/styles/content.styles';
import { getPostAndMorePosts, getPostWithSlug } from '../../lib/posts';

interface IPost {
	post: {
		title: string;
		id: string;
		slug: string;
		createdAt: string;
		coverImage: { url: string };
		body: { html: string };
		description: string;
	};
	morePosts: object;
	preview: boolean;
}

const Post = ({ post, morePosts, preview }: IPost) => {
	const { pathname, isFallback } = useRouter();

	if (isFallback) {
		return <p>loading...</p>;
	}

	return (
		<Layout
			pageTitle={post.title}
			pathname={pathname}
			pageDescription={post.description}
		>
			<Container width='narrow'>
				<StyledContent>
					<Date date={post.createdAt} />
					<Image src={post.coverImage.url} height={550} width={1200} />
					<div dangerouslySetInnerHTML={{ __html: post.body.html }} />
				</StyledContent>
			</Container>
		</Layout>
	);
};

export async function getStaticProps({ params, preview = false }) {
	const data = await getPostAndMorePosts(params.slug, preview);

	return {
		props: {
			preview,
			post: data.post,
			morePosts: data.morePosts,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const posts = await getPostWithSlug();

	return {
		paths: posts.map(({ slug }) => ({
			params: { slug },
		})),
		fallback: true,
	};
}

export default Post;
