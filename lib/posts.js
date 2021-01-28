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

export const getPostAndMorePosts = async (slug, preview) => {
	const data = await fetchAPI(
		`
		query PostBySlug($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
				id
				title
				createdAt
				body {
					html
				}
				coverImage {
          url(transformation: {
            image: {
              resize: {
                fit:scale,
                width:1200,
                height:550
              }
            }
          })
        }
			}
			morePosts: posts(orderBy: createdAt_DESC, first: 3, where: {slug_not_in: [$slug]}) {
				id
				title
				slug
				description
				createdAt
				coverImage {
					url(transformation: {
						image: {
							resize: {
								fit:scale,
								width: 200,
								height: 200
							}
						}
					})
				}
			}
    }`,
		{
			preview,
			variables: {
				stage: preview ? 'DRAFT' : 'PUBLISHED',
				slug,
			},
		}
	);

	return data;
};
