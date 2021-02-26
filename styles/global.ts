import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${() => css`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: inherit;
  }

  :root {
    --text-color: #bbb;
    --text-color-dark: #777;
    --text-color-bright: #999;
    --text-color-white: #fff;
    --prim-color: #b94c50;
    --red-prim: #bf360c;
    --red-sec: #b94c50;

    --transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    --animation-duration: 0.25s;

    --transition-duration: 0.25s;
    --background: #121212;

    --max-width: 83.5em;
    --max-width-bleed: 90%;
    --max-width-narrow: 50em;
  }

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
