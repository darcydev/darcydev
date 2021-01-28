import React from 'react';

import { formatDate } from '../utils/formateDate';

interface IDate {
	date: string;
}

const Date = ({ date }: IDate) => {
	return <time>{formatDate(date)}</time>;
};

export { Date };
