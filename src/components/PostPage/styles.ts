import styled, { css } from 'styled-components';

export const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto 0;

  @media(max-width: 1024px) {
    display: block;

    width: 65rem;
    height: 40rem;
  }
`;

export const Content = styled.div`
  margin-top: 8rem;
  max-width: 968px;

  font-size: 1rem;

  @media(max-width: 1024px) {
    display: flex;
    flex-direction: column;

    margin-left: 1.5rem;
  }
`;

export const CoverImage = styled.img`
  width: 60rem;
  height: 40rem;

  margin-top: 1.5rem;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

export const TextContainer = styled.article`
  margin-top: 2.4rem;
  font-size: 1.4rem;

  max-width: 100%;

  p {
    margin: 1.5rem auto;

    img {

    }
  }

  ul, ol {
    margin: 1.5rem;
  }

  pre {
    ${({ theme }) => css`
      width: 100%;
      overflow-x: auto;

      background: ${theme.colors.secondaryWhite};
      color: ${theme.colors.gray};

      padding: 2.5rem;
      margin: 2.5rem 0;

      line-height: 1.5;
      font-size: 1.4rem;
    `}
  }

  @media(max-width: 1024px) {
    font-size: 2rem;

    p {
      margin: 3.5rem auto;
    }

    ul, ol {
      margin: 3.5rem;
    }
  }
`;

export const Author = styled.p`
  font-style: italic;
  color: gray;

  margin-top: 0.6rem;
`;

export const AuthorInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 10px;
  background: #e8e8e8;

  max-width: 768px;
  margin: 100px auto 100px;

  img {
    margin-right: 1rem;
    background-size: cover;
    border-radius: 10px;

    width: 8.5rem;
    height: 8.5rem;
  }
`;

export const AuthorPhoto = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const AuthorInfo = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
`;
