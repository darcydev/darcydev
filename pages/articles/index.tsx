import React from 'react';
import { useRouter } from 'next/router';

import { Layout, Container } from '../../components';
import { getAllPostsPreview } from '../../lib/posts';
import { StyledCards } from '../../components/styles/cards.styles';
import { PostPreview } from '../../components/posts/PostPreview';

const Articles = ({ posts, preview }) => {
	const { pathname } = useRouter();

	return (
		<Layout
			pathname={pathname}
			pageTitle='Articles'
			pageDescription='Articles and Essays about Frontend Web Development and software engineering'
		>
			<Container>
				<p className='page-intro'>
					More long form articles and essays about new things I'm exploring and
					learning about...
				</p>

				<blockquote>
					All articles here are for demo purposes. But hey, the sky is the limit
					🚀
				</blockquote>
				<StyledCards>
					{posts.map((post) => (
						<PostPreview post={post} />
					))}
				</StyledCards>
			</Container>
		</Layout>
	);
};

export const getStaticProps = async ({ preview = false }) => {
	const posts = (await getAllPostsPreview(preview)) || [];

	return {
		props: { posts, preview },
		revalidate: 1,
	};
};

export default Articles;
