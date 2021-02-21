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
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 1rem;

  animation: ${appearFromTop} 2s;
`;

export const Details = styled.div`
  display: block;
  position: absolute;

  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.6rem;

    padding: 1.5rem;
    width: 26rem;

  `}
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
`;

export const Author = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.weights.light};
    font-size: 1rem;
  `}
`;

export const Image = styled.img`
  background-size: cover;
  border-radius: 1.5rem;

  width: 26rem;
  height: 26rem;

  opacity: 0.6;
  transition: opacity 400ms;

  &:hover {
    opacity: 1;
  }
`;
