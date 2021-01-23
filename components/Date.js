import { formatDate } from '../utils/formateDate';

export default function Date({ datetime }) {
	return <time dateTime={datetime}>{formatDate(datetime)}</time>;
}
