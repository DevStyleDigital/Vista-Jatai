import styled from 'styled-components';

export const HeroStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 1023px) {
      width: 100%;
      object-fit: cover;
    }
  }
`;
