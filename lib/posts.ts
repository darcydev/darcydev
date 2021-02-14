import { fetchAPI } from '.';

export const getPostWithSlug = async () => {
	const { posts } = await fetchAPI(`
	{
		posts {
			slug
		}
	}
`);

	return posts;
};

export const getAllPostsPreview = async (preview) => {
	const { posts } = await fetchAPI(`
    {
      posts (orderBy: createdAt_DESC) {
				id
				title
				description
				createdAt
				notionUrl
				tags
      }
    }
	`);

	return posts;
};
