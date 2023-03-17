import styled from 'styled-components';

export const SectionFormStyle = styled.div`
  width: 100%;
  height: auto;
  background: var(--color-background-darkVinho);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  gap: 3rem;
  .title {
    background: var(--color-background-cobre);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 500;
    font-size: 28px;
    strong {
      font-weight: 700;
      font-size: 32px;
    }
    @media (max-width: 920px) {
      text-align: center;
    }
  }
  @media (max-width: 920px) {
    padding: 3rem 1rem;
  }
`;
