import fetchAPI from '.';

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

export const getAllPostsPreview = async () => {
  const { posts } = await fetchAPI(`
    {
      posts (orderBy: createdAt_DESC) {
				id
				title
				description
				createdAt
        notionId
				tags
      }
    }
	`);

  return posts;
};
