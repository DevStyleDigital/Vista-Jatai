import styled from 'styled-components';

export const CarroselStyle = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-darkVinho);
  .mySwiper {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 963px) {
    padding: 0.5rem;
  }
`;
