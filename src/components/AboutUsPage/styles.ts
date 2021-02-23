import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;

  margin: 90px auto 10px;
  font-size: 1.2rem;
`;

export const Question = styled.div`
  margin: 1rem;

  h2 {
    margin-bottom: 0.6rem;
  }

  p {
    line-height: 1.7;

    a {
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.purple};

      color: ${({ theme }) => theme.colors.black};
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.purple};
        text-decoration: none;
      }
    }
  }
`;

export const Authors = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1rem 0 0 2rem;

  li {
    margin-bottom: 0.3rem;
  }
`;
