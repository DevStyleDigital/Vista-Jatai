import styled from 'styled-components';

export const WhatsappStyle = styled.a`
  width: auto;
  padding: 1rem 1rem;
  background: #67747d;
  font-family: var(--font-primary);
  font-size: 1rem;
  color: white;
  position: fixed;
  text-decoration: none;
  cursor: pointer;
  z-index: 9999;
  right: 0;
  top: 32rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  @media (max-width: 1023px) {
    padding: 0.5rem;
    svg {
      width: 80%;
    }
    span {
      display: none;
    }
  }
`;
