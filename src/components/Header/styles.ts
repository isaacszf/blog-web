import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin: auto 8.7rem;

  @media(max-width: 1024px) {
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 0.6rem 2.4rem 0.6rem 2rem;
    width: 100%;

    z-index: 9999;

    background: ${theme.colors.blue};
    color: ${theme.colors.gray};

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    @media(max-width: 1024px) {
      display: block;

      text-align: center;
    }
  `}
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;

  ul {
    list-style-type: none;
    position: relative;

    li {
      padding: 1.6rem;
      position: relative;

      a {
        ${({ theme }) => css`
          position: relative;

          text-decoration: none;
          color: ${theme.colors.white};
          font-weight: ${theme.weights.xbold};

          &:hover {
            text-decoration: underline;
          }
        `}
      }
    }
  }

  @media(max-width: 1024px) {
    display: none;
  }
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 1.3rem;
    font-weight: ${theme.weights.xbold};

    position: relative;
  `}
`;
