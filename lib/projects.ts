import { fetchAPI } from '.';

export const getAllProjects = async (preview) => {
	const { projects } = await fetchAPI(`
	{
		projects (orderBy: createdAt_DESC) {
			id
			createdAt
			title
			description
			tags
			externalUrl
			coverImage {
				url(transformation: {
					image: {
						resize: {
							fit:scale,
							width:1200,
							height:600
						}
					}
				})
			}
		}
	}
`);

	return projects;
};
