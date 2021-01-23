import { fetchAPI } from '.';

export const getAllPostsWithSlug = async () => {
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
      posts {
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
                width:200,
                height:200
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
                width:900,
                height:600
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

	console.log('data :>> ', data);

	return data;
};

/* export async function getPostAndMorePosts(slug, preview) {
	const data = await fetchAPI(
		`
    query PostBySlug($slug: String!, $stage: Stage!) {
      post(stage: $stage, where: {slug: $slug}) {
				id
        title
				slug
      }
    }
  `,
		{
			preview,
			variables: {
				stage: preview ? 'DRAFT' : 'PUBLISHED',
				slug,
			},
		}
	);

	return data;
} */
