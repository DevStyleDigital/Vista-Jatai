import styled from 'styled-components';

export const FasesStyle = styled.div`
  width: 100%;
  height: auto;
  min-height: 100px;
  background: var(--color-background-cobre);
  display: flex;
  .texts {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 5rem; */

    font-weight: 700;
    font-family: var(--font-primary);
    letter-spacing: 0.1rem;
    color: white;
    .escolha {
      text-align: start;
      padding: 1rem 3rem;
      font-size: 15px;
      font-weight: 400;
      width: 40rem;
      span {
        font-size: 17px;
        font-weight: 700;
      }
      @media (max-width: 769px) {
        width: 100%;
        text-align: center;
      }
    }

    .endereco {
      text-align: end;
      border-left: 1px solid rgba(255, 255, 255, 0.7);
      font-size: 15px;
      padding: 0.5rem 3rem;
      font-weight: 400;
      width: 430px;
      span {
        font-size: 17px;
        font-weight: 700;
      }
      @media (max-width: 769px) {
        width: 100%;
        border-left: 0;
        border-top: 1px solid rgba(255, 255, 255, 0.7);
        text-align: center;
        padding: 1rem 0;
      }
    }
    @media (max-width: 769px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 769px) {
    padding: 1rem;
  }
`;
