import styled from 'styled-components';

export const LogosSectionStyle = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  background: var(--color-background-lightGreen);
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  span {
    height: 50%;
    width: 1px;
    background: var(--color-background-gold);
  }
  .folhas {
    position: absolute;
    right: 0;
    top: -20.5rem;
    z-index: 1;
    @media (max-width: 1370px) {
      display: none;
    }
  }
  .folhasMobile2 {
    position: absolute;
    right: 0;
    top: -5rem;
    z-index: 1;
    @media (min-width: 1370px) {
      display: none;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 5rem 0 4rem 0;
  }
`;
