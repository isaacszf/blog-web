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

export const Container = styled.div`
  position: absolute;
  top: 90%;

  width: 100vw;
  height: 100vh;

  max-width:100%;

  padding: 2rem;
  background: ${({ theme }) => theme.colors.backgroundWhite};

  @media(max-width: 1024px) {
    position: inherit;
    padding: 0;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 9999;

  align-items: center;
  justify-content: center;

  margin: auto 0.4rem;

  @media(max-width: 1024px) {
    display: block;
    margin: 0;
  }
`;

export const WrapperSlider = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;

  animation: ${appearFromTop} 1s;

  .awssld__box, .awssld--active {
    z-index: 0;
  }

  @media(max-width: 1024px) {
    display: none;
  }
`;
