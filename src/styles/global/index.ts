import { createGlobalStyle } from 'styled-components';

const ColorsCSS = createGlobalStyle`
  :root {
 
    --color-text: ${({ theme }) => theme.colors.textDefault};
    --color-background-header: ${({ theme }) => theme.colors.header};
    --color-background-darkVinho: ${({ theme }) => theme.colors.darkVinho};
    --color-background-lightVinho: ${({ theme }) => theme.colors.lightVinho};
    --color-background-cobre: ${({ theme }) => theme.colors.cobreColor}
    --color-background-bege: ${({ theme }) => theme.colors.bege}
   
  }
`;
const FontsCSS = createGlobalStyle`
  :root {
    --font-primary: ${({ theme }) => theme.fonts.primary};
    --font-secondary: ${({ theme }) => theme.fonts.secondary};
  }
`;
const BorderRadiusCSS = createGlobalStyle`
  :root {
    --border-radius-sm: ${({ theme }) => theme.borderRadius.sm};
    --border-radius-xl: ${({ theme }) => theme.borderRadius.xl};
  }
`;
const RootCSS = createGlobalStyle`
  :root {
    --max-width: ${({ theme }) => theme.maxWidth};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    overflow-x: hidden;
    scroll-behavior: smooth !important;
  }
  body {
    padding: 0 !important;
    color: var(--color-text);
    font-family: var(--font-primary);
    background-color: var(--color-background);
    position: relative;
    
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-secondary);
  }
  .swiper-button-next, .swiper-button-prev {
    color: white;
  }

  .swiper{
      overflow-y:auto;
      overflow-x: hidden;
  }

  .swiper-pagination{
      margin-top: 16px !important;
      position: initial;
  }

  .swiper-pagination-bullet{
    margin: 8px !important;
  }
  .swiper-pagination-bullet-active{
    background: white;
  }

  .mob-visible {
    display: none;
    @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
      display: block;
    }
  }
  .tab-visible {
    display: none;
    @media (min-width: ${({ theme }) => theme.mediaQueries.minMobile}) {
      display: block;
    }
  }
  .mx-w {
    @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
      max-width: var(--max-width);
      margin: 0 auto;
    }
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
    html {
      margin: 0 auto;
    }
  }
`;

export const GlobalStyles = {
  ColorsCSS,
  FontsCSS,
  BorderRadiusCSS,
  RootCSS,
};
