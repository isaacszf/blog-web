import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin: auto 8.7rem;

  @media(max-width: 1024px) {
    margin: 0;

    position: relative;
    left: 4.6rem;
  }
`;

export const Header = styled.header`
  padding: 1.5rem 2.8rem 1.5rem 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 1024px) {
    display: block;

    text-align: center;
 }
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;

  ul {
    list-style-type: none;

    li {
      padding: 1.6rem;

      a {
        ${({ theme }) => css`
          text-decoration: none;
          color: ${theme.colors.black};
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
    font-weight: ${theme.weights.xbold}
  `}
`;
