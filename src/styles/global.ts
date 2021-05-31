import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #121414;
    --red: #AA2424;
    --yellow: #FECA57;
    --white: #F0F0F0;
    --black: #2D2D2D;
    --black-light: #565656;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--white);
  }
  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  ul,
  li {
    list-style: none;
  }
`;
