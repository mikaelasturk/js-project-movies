import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  :root {
    /* ------------- */
    /* Font settings */
    /* ------------- */ 
    --font-family:  Arial, sans-serif;
    --font-txt: var(--font-family);
    --font-heading: var(--font-family);

    --h1-font-weight: 600;
    --p-font-size-mobile: 16px;
    --h1-font-size-mobile: 32px;

    --p-font-size-desktop:18px;
    --h1-font-size-desktop: 32px;
    
   

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
    line-height: 1.3;
    font-family: var(--font-txt);
    max-width: 100vw;
    background-color: var(--1st-clr);
    color: var(--2nd-clr);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
  }

  ul, ol {
    list-style: none;
  }

  h1 {
    font-size: var(--h1-font-size-mobile);
    font-weight: var(--h1-font-weight);
  }

  p {
    overflow-wrap: break-word;
    font-size: var(--p-font-size-mobile);
  }

  a {
    text-decoration: none;
    color: inherit;
  }  

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    h1 {
      font-size: var(--h1-font-size-desktop);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
   
  }
`