import styled from '@emotion/styled';
import Tilt from 'react-tilt';

export const Tilter = styled(Tilt)`
	padding: 40px 0;
	background: #202020;
	margin-bottom: 0.75em;
	border-radius: 4px;
	padding: 0.75em;
	cursor: pointer;

	@media all and (min-width: 540px) {
		margin: 0 0.5em 1em;
		flex: 1 1 40%;
	}

	@media all and (min-width: 1024px) {
		flex: 1 30%;
	}
`;

export const StyledExperimentsSection = styled.section`
	margin-top: 40px;
	margin-bottom: 40px;

	h2 {
		font-size: 1.75em;
		margin-bottom: 1rem;
	}

	.section {
		display: flex;
		flex-wrap: wrap;
	}

	.experiments {
		display: flex;
		flex-wrap: wrap;
	}

	.experiment-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media all and (min-width: 1020px) {
		h2 {
			font-size: 2.75em;
		}
	}
`;
