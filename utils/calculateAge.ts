export const calculateAge = (): number => {
	const today: any = new Date();
	const birthDay: any = new Date('1990/08/19');

	return Math.floor((today - birthDay.getTime()) / 3.15576e10);
};
