import { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "./styles/styles";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <h1>Movies</h1>
        </main>
      </ThemeProvider>
    </>
  )
}
