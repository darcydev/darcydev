import fetchAPI from '.';

export const getAllExperiments = async (preview) => {
  const { experiments } = await fetchAPI(`
	{
		experiments (orderBy: createdAt_DESC) {
			id
			createdAt
			title
			description
			tags
			externalUrl
		}
	}
`);

  return experiments;
};
