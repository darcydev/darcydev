import styled from 'styled-components';

import Date from '../../components/Date';
import MorePosts from '../../components/Post/MorePosts';
import { getPostAndMorePosts, getAllPostsWithSlug } from '../../lib/posts';

export default function Blog({ post, morePosts, preview }) {
	return (
		<StyledContainer>
			<div className='post-wrp'>
				<div className='img-wrp'>
					<img src={post.coverImage.url} alt={post.title} />
				</div>
				<div className='txt-wrp'>
					<h1>{post.title}</h1>
					<Date datetime={post.createdAt} />
					<p dangerouslySetInnerHTML={{ __html: post.body.html }} />
				</div>
			</div>
			<MorePosts posts={morePosts} />
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	.post-wrp {
		.img-wrp {
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
