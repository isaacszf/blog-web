import styled, { css, keyframes } from 'styled-components';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 1rem;

  animation: ${appearFromTop} 2s;

  @media(max-width: 1024px) {
    display: inline-flex;
  }
`;

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #fff;
    border-radius: 0.2rem;

    min-height: 14rem;

    text-align: center;
    color: ${theme.colors.black};
    font-size: 1.6rem;

    padding: 1.5rem;
    width: 26rem;

    border-top: none;
  `}
`;

export const Title = styled.h3`
  font-size: 1.3rem;

  margin-bottom: 1rem;
`;

export const Author = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.weights.light};
    font-size: 1rem;
  `}
`;

export const Image = styled.img`
  background-size: auto;

  width: 26rem;
  height: 26rem;

  opacity: 0.6;
  transition: opacity 400ms;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const Data = styled.span`
  margin-top: 1rem;

  font-size: 0.6rem;
`;
