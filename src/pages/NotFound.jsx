import styled from "styled-components"
import { Link } from "react-router-dom";



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
  margin-top: 100px;
  /* gap: 20px; */
`

const StyledLink = styled(Link)`
  margin-top: 20px;
  padding: 12px 20px;

  border-radius: 5px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  background-color: #eee;

  &:hover {
    text-decoration: underline;
  }
`

export const NotFound = () => {
  return (
    <Wrapper>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <StyledLink to="/">Go back to Home</StyledLink>
    </Wrapper>
  )
}