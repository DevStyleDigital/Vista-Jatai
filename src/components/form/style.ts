import styled from 'styled-components';

export const FormStyle = styled.div`
  width: 55rem;
  height: auto;
  min-height: 540px;
  background: var(--color-background-cobre);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  z-index: 99;
  bottom: 0;
  .header {
    font-family: var(--font-primary);
    text-align: center;
    font-size: 22px;
    letter-spacing: 1px;
    h1 {
      font-family: var(--font-primary);
      font-size: 24px;
      font-weight: 700;
      color: #3b2e38;
    }
    span {
      font-size: 20px;
      color: #3b2e38;
      font-weight: 400;
    }
    @media (max-width: 769px) {
      font-size: 24px;
      h1 {
        font-size: 24px;
      }
      strong {
        font-size: 26px;
      }
    }
    @media (max-width: 700px) {
      font-size: 18px;
      h1 {
        font-size: 18px;
      }
      strong {
        font-size: 18px;
      }
    }
  }
  form {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 2rem;
    color: #3b2e38;
    label {
      width: 45%;
      display: flex;
      flex-direction: column;
      font-family: var(--font-primary);
      font-size: 18px;
      gap: 0.5rem;
      strong {
        padding-left: 0.7rem;
      }
      input {
        width: 100%;
        height: 2.7rem;
        border: none;
        border-radius: 5px;
        padding: 0.7rem;
        ::-webkit-input-placeholder {
          font-family: var(--font-primary);
          opacity: 0.6;
          letter-spacing: 1px;
        }
        @media (max-width: 769px) {
          height: 3rem;
        }
        @media (max-width: 700px) {
          height: 100%;
          height: 3rem;
        }
      }
      @media (max-width: 769px) {
        width: 70%;
        font-size: 20px;
      }
      @media (max-width: 700px) {
        width: 100%;
      }
    }
    button {
      margin-top: 1rem;
      color: white;
      padding: 1rem 2rem;
      background: #594855;
      border-radius: 6px;
      font-weight: 700;
      font-family: var(--font-primary);
      font-size: 14px;
      transition: all 0.5s;
      :hover {
        transform: scale(1.02);
      }
      @media (max-width: 769px) {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 920px) {
    width: 100%;
    padding: 1rem;
  }
`;
