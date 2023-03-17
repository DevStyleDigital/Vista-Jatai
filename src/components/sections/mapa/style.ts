import styled from 'styled-components';

export const MapaStyle = styled.div`
  width: 100%;
  height: 710px;
  position: relative;
  z-index: 9;
  .container {
    width: 100%;
    height: 100%;
    padding-left: 3rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    .content {
      background-color: white;
      box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.25);
      width: 30rem;
      height: auto;
      position: relative;
      padding: 2.8rem;
      margin-left: 2.7rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-family: var(--font-primary);
      gap: 2rem;
      .firstText {
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--color-background-darkVinho);
        line-height: 36px;
      }
      .secondText {
        color: var(--color-background-lightVinho);
        font-size: 1.2rem;
        line-height: 30px;
      }

      @media (max-width: 1200px) {
        width: 28rem;
        padding-left: 0rem;
        padding: 1rem;
        margin-left: 0rem;
      }
      @media (max-width: 980px) {
        width: 32rem;
        transform: translateY(-15%);
      }
      @media (max-width: 700px) {
        width: 90%;
      }
    }
    @media (max-width: 1200px) {
      padding: 1rem;
    }
    @media (max-width: 980px) {
      justify-content: center;
      align-items: flex-end;
      padding: 0;
    }
  }
`;
