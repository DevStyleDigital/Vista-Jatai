import styled from 'styled-components';

export const SobreStyle = styled.div`
  width: 100%;
  height: auto;
  background-color: #48545d;
  display: flex;
  height: 550px;
  align-items: start;
  .images {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #48545d;
    .man {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .logo {
      position: absolute;
      width: 50%;
      height: 25%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 1rem 1rem;
    .title {
      background: var(--color-background-cobre);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-size: 20px;
      width: 40%;
      font-weight: 700;
    }
    .block {
      width: 80%;
    }
    @media (max-width: 1100px) {
      align-items: center;
      padding: 2rem 0;
      .title {
        width: 90%;
      }
      .block {
        width: 90%;
      }
    }
    @media (max-width: 920px) {
      align-items: center;
      padding: 2rem 0;
      .title {
        width: 90%;
      }
      .block {
        width: 90%;
      }
    }
  }
  @media (max-width: 920px) {
    flex-direction: column;
    height: auto;
  }
`;
