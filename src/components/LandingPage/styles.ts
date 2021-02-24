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

export const PresentationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${appearFromTop} 3s;

  border-bottom: 1px solid #cfcfcc;
  padding-bottom: 2.4rem;

  @media(max-width: 1024px) {
    display: none;
  }
`;

export const PresentationDescription = styled.div`
  max-width: 996px;

  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 0.12rem;

  text-align: center;
`;

export const Post = styled.div`
  display: flex;
  flex-wrap: wrap;

  z-index: 9999;

  align-items: center;
  justify-content: center;

  margin: auto 0.4rem;
  margin-top: 1.5rem;

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

export const Animation = styled.div``;
