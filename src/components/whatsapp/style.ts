import styled from 'styled-components';

export const WhatsappStyle = styled.div`
  width: auto;
  padding: 1rem 1rem;
  max-width: 124px;
  background: #67747d;
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 32rem;
  text-transform: uppercase;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: 1rem;
    color: white;
    gap: 1rem;
    font-weight: 700;
  }
  @media (max-width: 1024px) {
    max-width: 54px;
    padding: 0.5rem;
    a {
      svg {
        width: 80%;
      }
      span {
        display: none;
      }
    }
  }
`;
