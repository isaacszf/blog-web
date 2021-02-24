import styled, { css } from 'styled-components';

type Props = {
  isMobile?: boolean;
};

export const Wrapper = styled.div`
  @media(max-width: 1024px) {
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 0.6rem 2.4rem 0.6rem 2rem;
    width: 100%;

    z-index: 9999;

    background: #292929;
    color: ${theme.colors.white};

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    svg {
      cursor: pointer;
    }

    @media(max-width: 1024px) {
      text-align: center;

      svg {
        height: 1.2rem;
        width: 1.2rem;

        margin-top: 0.4rem;
      }
    }
  `}
`;

export const Links = styled.nav<Props>`
  display: flex;
  align-items: center;

  background: #2b2b2b;
  border-radius: 1.6rem;

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

    @media(max-width: 1024px) {
      font-size: 1.3rem;
    }
  `}
`;
