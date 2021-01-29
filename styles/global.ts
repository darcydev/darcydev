import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${() => css`
	html {
		height: 100%;

		body {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: 'Roboto', Arial, sans-serif;

			#root {
				background: #efefef;
				color: #000;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-family: sans-serif;
				height: 100%;
				padding: 15px;
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: 'Rubik', 'Roboto', Arial, Helvetica, sans-serif;
			}

			ul {
				padding: 0;
				margin: 0;
				list-style: none;
			}

			a {
				text-decoration: none;
				color: inherit;
			}
		}
	}
`}
`;
