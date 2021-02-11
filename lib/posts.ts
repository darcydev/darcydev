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
				slug
				description
				createdAt
				notionUrl
				coverImage {
          url(transformation: {
            image: {
              resize: {
                fit:scale,
                width:750,
                height:375
              }
            }
          })
        }
      }
    }
	`);

	return posts;
};
