import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
    --prim-red: #bf360c;
    --sec-red: #b94c50;
    --prim-purple: #b439df;
    --prim-pink: #e5337e;

    --transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    --animation-duration: 0.25s;

    --transition-duration: 0.25s;
    --background: #121212;

    --max-width: 83.5em;
    --max-width-narrow: 50em;
    --max-width-bleed: 90%;
    --max-width-full: 100%;

    @media all and (min-width: 1330px) {
      font-size: 1.2em;
    }
  }

  html {
    height: 100%;
    font-size: 17px;
    line-height: 1.5;
    color: var(--text-color);

    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', Arial, sans-serif;
      background: #121212;
      color: #999;
      transition: all var(--transition-duration)
        var(--transition-timing-function);

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

      main {
        margin-bottom: 2em;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Rubik', 'Roboto', Arial, Helvetica, sans-serif;
        color: var(--text-color-white);
        margin-bottom: 1em;
      }

      h1 {
        font-size: 2.5em;
        line-height: 1.25;
        font-weight: 800;
        margin-bottom: 1rem;

        @media (min-width: 759px) {
          font-size: 3em;
        }
        @media (min-width: 1024px) {
          font-size: 4em;
        }
        @media (min-width: 1336px) {
          font-size: 4.37em;
        }
      }

      h2 {
        @media (min-width: 759px) {
          font-size: 2em;
        }
        @media (min-width: 1024px) {
          font-size: 3em;
        }
      }

      ul,
      ol {
        color: var(--text-color);
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      a {
        color: inherit;
        text-decoration: underline var(--prim-purple);
        text-decoration-thickness: 3px;
      }
      a:hover,
      a:visited:hover {
        text-decoration: none;
        color: var(--prim-purple);
      }
      a:focus {
        outline-color: var(--sec-red);
        text-decoration: none;
      }
      a > img,
      a:hover > img {
        text-decoration: none;
      }

      img {
        width: 100%;
        max-width: 100%;
      }

      p,
      table {
        margin-bottom: 1.5em;
        color: var(--text-color);
      }
      td,
      th {
        border: 1px solid var(--text-color-white);
        padding: 0.5em;
      }
      th {
        color: var(--text-color-white);
      }
      table {
        border-collapse: collapse;
        border: 1px solid var(--text-color);
        width: 100%;
        overflow-x: scroll;
        display: block;
      }

      blockquote {
        font-style: italic;
        background: #202020;
        position: relative;
        padding: 1em 1em;
        margin-bottom: 1.5em;
      }
      blockquote p {
        margin-bottom: 0;
      }
      blockquote:before {
        content: '';
        height: 100%;
        width: 4px;
        display: inline-block;
        background: var(--sec-red);
        position: absolute;
        top: 0;
        left: 0;
      }
      hr {
        margin-bottom: 1em;
        border: none;
        border-bottom: 1px solid #505050;
      }
      figcaption {
        margin-top: 0.5em;
        text-align: center;
        font-size: 0.8em;
        font-style: italic;
        display: block;
      }
      .max-width {
        max-width: 50em;
      }
      .page-intro {
        text-align: center;
        max-width: 500px;
        margin: 0 auto 2em;
      }
      .remark-highlight {
        border: 1px solid #dddddd;
        border-radius: 0.3em;
        margin: 0.5em 0;
        overflow: auto;
      }
      .remark-highlight pre[class*='language-'] {
        background-color: transparent;
        margin: 0;
        padding: 0;
        overflow: initial;
        float: left; /* 1 */
        min-width: 100%; /* 2 */
      }
      /* highlight for each spotlight line */
      .remark-highlight-code-line {
        background-color: #feb;
        display: block;
        margin-right: -1em;
        margin-left: -1em;
        padding-right: 1em;
        padding-left: 0.75em;
        border-left: 0.25em solid #f99;
      }
      /* Gutter for line numbers when the line-numbers plugin is active */
      .remark-highlight pre[class*='language-'].line-numbers {
        padding-left: 2.8em;
      }
    }
  }
`}
`;

export default GlobalStyles;
