import styled from 'styled-components';

import PostPreview from './PostPreview';

export default function MorePosts({ posts }) {
	return (
		<StyledContainer>
			<h3>More Posts</h3>
			<div className='posts-wrp'>
				{posts.map((post) => (
					<PostPreview key={post.id} post={post} />
				))}
			</div>
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	h3 {
		font-size: 25px;
	}
`;
