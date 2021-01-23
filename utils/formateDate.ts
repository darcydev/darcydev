import { format } from 'date-fns';

export const formatDate = (datetime: string): string => {
	return format(new Date(datetime), 'd MMMM yyyy');
};
