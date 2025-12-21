import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
import { Layout } from "./components/layout/layout"
import { theme, GlobalStyle } from "./styles/styles";
import { 
  Home, 
  Movie, 
  NotFound 
} from "./pages/pages"

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<Movie />} /> 
              <Route path="/notfound" element={<NotFound />} />
               <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes> 
      </ThemeProvider>
    </>
  )
}
