import React from 'react';
import { useRouter } from 'next/router';

import { Layout, Container } from '../../components';
import ArticlesWrap from '../../components/articles/ArticlesWrap';
import { ArticleTile } from '../../components/articles/ArticleTile';
import { getAllPostsPreview } from '../../lib/posts';

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
					A collection of long-form articles and essays about new things I'm
					exploring and learning about... 🚀
				</p>
				<ArticlesWrap>
					{posts.map((post) => (
						<ArticleTile post={post} />
					))}
				</ArticlesWrap>
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
