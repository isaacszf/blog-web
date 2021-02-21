import styled from 'styled-components';

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

  @media(max-width: 1024px) {
    display: block;
  }
`;
