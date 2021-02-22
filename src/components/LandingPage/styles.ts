import styled, { keyframes } from 'styled-components';

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

export const Wrapper = styled.div`
  width: 100%;

  @media(max-width: 1024px) {
    display: block;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  margin: auto 3rem;

  @media(max-width: 1024px) {
    display: block;
    margin: 0;
  }
`;

export const WrapperSlider = styled.div`
  width: 75%;
  height: 100%;

  margin: 0 auto;
  margin-bottom: 3rem;

  animation: ${appearFromTop} 1s;

  @media(max-width: 1024px) {
    display: none;
  }
`;
