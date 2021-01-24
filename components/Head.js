import Head from 'next/head';

export default function HeadComponent() {
	return (
		<Head>
			<link rel='preconnect' href='https://fonts.gstatic.com' />
			<link
				href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,400&display=swap'
				rel='stylesheet'
			/>
		</Head>
	);
}
