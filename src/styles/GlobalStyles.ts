import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body, _next {
      width: 100%;
      height: 100%;
    }

    body {
      color: ${theme.colors.black};
      font-family: ----apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  `}
`;
