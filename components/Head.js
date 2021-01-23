import Head from 'next/head';

export default function HeadComponent() {
	return (
		<Head>
			<link rel='preconnect' href='https://fonts.gstatic.com' />
			<link
				href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap'
				rel='stylesheet'
			/>
		</Head>
	);
}
