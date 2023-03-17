import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  height: auto;
  background: var(--color-background-header);
  padding: 1.5rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 99999;
  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.6);
  svg {
    width: 180px;
  }
  nav {
    display: flex;
    gap: 2rem;
    align-items: center;
    a {
      font-size: 20px;
      text-decoration: none;
      color: var(--color-text);
      font-weight: 300;
    }
    span {
      width: 1px;
      height: 35px;
      background: var(--color-background-cobre);
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
  @media (max-width: 1440px) {
    padding: 1.5rem 2rem;
  }
  @media (max-width: 1100px) {
    padding: 2rem 1rem;
    justify-content: center;
  }
  @media (max-width: 600px) {
    padding: 1rem;
    justify-content: center;
  }
`;
