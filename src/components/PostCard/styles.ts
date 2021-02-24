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

    &:first-child {
      margin-top: 4rem;
    }
  }
`;

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    background: #fff;
    border-radius: 0.2rem;

    min-height: 12rem;

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
`;

export const TitleContainer = styled.div`
  margin-bottom: 1.2rem;
  text-align: left;
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

export const Data = styled.small`
  font-size: 1rem;
`;

export const DataContainer = styled.div`
  width: 100%;

  padding: .75rem;
  background: #faf8f0;
  border-top: 1px solid #e8e7e3;
  text-align: center;
`;
