import styled from 'styled-components';

export const ValueSectionStyle = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1rem;
  min-height: 200px;
  background-color: var(--color-background-darkVinho);
  display: flex;
  justify-content: center;
  align-items: center;
  .texts {
    display: flex;
    gap: 4rem;
    align-items: center;
    font-family: var(--font-primary);
    .loteamento {
      background: var(--color-background-cobre);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      width: 300px;
      opacity: 0.9;
      span {
        font-weight: 700;
        font-size: 24px;
      }
      @media (max-width: 1300px) {
        font-size: 20px;
        width: 300px;
      }
    }
    .values {
      color: var(--color-text);
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      width: 200px;
      opacity: 0.9;
      span {
        font-weight: 700;
        font-size: 20px;
      }
      @media (max-width: 1300px) {
        font-size: 16px;
        width: 350px;
        span {
          font-size: 18px;
        }
      }
      @media (max-width: 700px) {
        font-size: 20px;
        width: fit-content;
        span {
          font-size: 22px;
        }
      }
    }
    a {
      white-space: nowrap;
      text-decoration: none;
      padding: 1rem 2rem;
      background: var(--color-background-cobre);
      border-radius: 7px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: var(--color-background-darkVinho);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s;
      font-family: var(--font-primary);
      :hover {
        transform: scale(1.02);
      }
      @media (max-width: 1300px) {
        font-size: 16px;
        padding: 1rem 1.5rem;
      }
      @media (max-width: 700px) {
        font-size: 17px;
      }
    }
    @media (max-width: 1200px) {
      gap: 1.5rem;
    }

    .line {
      width: 1px;
      height: 80px;
      background: var(--color-background-cobre);
      @media (max-width: 1200px) {
        width: 80px;
        height: 1px;
      }
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 0;
    }
  }
`;
