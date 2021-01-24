import styled from 'styled-components';

import SocialLinks from '../components/SocialLinks';
import SEO from '../components/SEO';
import { calculateAge } from '../utils/calculateAge';

export default function Home() {
	const age = calculateAge();

	return (
		<>
			<SEO />
			<StyledHero>
				<div className='content'>
					<h1>Hello, I'm Darcy Price</h1>
					<h2>Full Stack Developer</h2>
					<SocialLinks />
				</div>
			</StyledHero>
		</>
	);
}

const StyledHero = styled.section`
	height: 100vh;

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: auto;
		align-items: center;
		width: 1200px;
		max-width: 90%;
		height: 100%;

		h1 {
			margin: 0;
			font-size: 40px;
			width: 100%;
			color: #000;

			:after {
				content: '';
				background-color: #000;
				display: block;
				height: 2px;
				margin: 0.325em 0 0.5em 0;
				width: 100%;
			}
		}

		h2 {
			width: 100%;
			margin: 0;
			font-size: 25px;
			color: #000;
		}

		.component--social-links {
			margin: 30px auto 0 0;
		}
	}
`;
