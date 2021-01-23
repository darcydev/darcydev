import styled from 'styled-components';

import PostPreview from '../../components/Post/PostPreview';
import { getAllPostsPreview } from '../../lib/posts';

export default function Blog({ posts, preview }) {
	console.log('posts :>> ', posts);

	return (
		<StyledContainer>
			<h1>Blog</h1>
			<div className='blogs-preview-wrp'>
				{posts.map((post) => (
					<PostPreview key={post.id} post={post} />
				))}
			</div>
		</StyledContainer>
	);
}

const StyledContainer = styled.div``;

export async function getStaticProps({ preview = false }) {
	const posts = (await getAllPostsPreview(preview)) || [];

	return {
		props: { posts, preview },
	};
}
