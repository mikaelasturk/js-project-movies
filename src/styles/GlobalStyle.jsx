import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  :root {
    /* ------------- */
    /* Font settings */
    /* ------------- */ 
    --font-family: "Roboto Mono", monospace, system-ui, Avenir, Helvetica, Arial, sans-serif;
    --font-txt: var(--font-family);
    --font-heading: var(--font-family);

    /* ----------- */
    /* Main colors */
    /* ----------- */
    --1st-clr: #000000; 
    --2nd-clr: #FFFFFF;
  }

  /* --------- */
  /*   Reset   */
  /* --------- */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: var(--font-txt);
    max-width: 100vw;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    font-family: var(--font-heading);
    line-height: 1.2;
  }

  ul, ol {
    list-style: none;
  }

  h1 {
    font-size: var(--h1-font-size-mobile);
    font-weight: var(--h1-font-weight);
  }
    
  h2 {
    font-size: var(--h2-font-size-mobile);
    font-weight: var(--h2-font-weight);
  }
    
  h3 {
    font-size: var(--h3-font-size-mobile);
    font-weight: var(--h3-font-weight);
  }

  p {
    overflow-wrap: break-word;
    font-size: var(--p-font-size-mobile);
  }
  

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
   
  }
`