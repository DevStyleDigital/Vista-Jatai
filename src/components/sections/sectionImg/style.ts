import styled from 'styled-components';

export const SectionImgStyle = styled.div`
  width: 100%;
  height: auto;
  padding: 3rem 5rem;
  background: var(--color-background-lightVinho);
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 963px) {
    padding: 0;
    height: 250px;
    img {
      object-fit: cover;
    }
  }
`;
