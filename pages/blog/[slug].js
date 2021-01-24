import { useRouter } from 'next/router';
import styled from 'styled-components';

import SEO from '../../components/SEO';
import Date from '../../components/Date';
import MorePosts from '../../components/Post/MorePosts';
import { getPostAndMorePosts, getAllPostsWithSlug } from '../../lib/posts';

export default function Blog({ post, morePosts, preview }) {
	const { isFallback } = useRouter();

	if (isFallback) {
		return <p>loading...</p>;
	}

	const { title, description, coverImage, createdAt, body } = post;

	return (
		<>
			<SEO title={title} description={description} />
			<StyledContainer>
				<div className='post-wrp'>
					<div className='img-wrp'>
						<img src={coverImage.url} alt={title} />
					</div>
					<div className='txt-wrp'>
						<h1>{title}</h1>
						<Date datetime={createdAt} />
						<p dangerouslySetInnerHTML={{ __html: body.html }} />
					</div>
				</div>
				<MorePosts posts={morePosts} />
			</StyledContainer>
		</>
	);
}

const StyledContainer = styled.div`
	.post-wrp {
		margin: 0 0 100px 0;

		.img-wrp {
			width: 100%;
			max-width: 900px;
			margin: auto;

			img {
				width: 100%;
				height: auto;
				border-radius: 10px;
			}
		}
	}
`;

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
	const posts = await getAllPostsWithSlug();

	return {
		paths: posts.map(({ slug }) => ({
			params: { slug },
		})),
		fallback: true,
	};
}
