import { format } from 'date-fns';

export const formatDate = (datetime: string): string => {
	console.log('datetime', datetime);

	return format(new Date(datetime), 'd MMMM yyyy');
};
