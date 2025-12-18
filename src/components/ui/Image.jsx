import styled from "styled-components"

const StyledImage = styled.img`
    border: 4px solid #fff;
    height: auto;

    width: auto;
 @media (min-width: 370px) {
    width: 200px;
  }

  @media (min-width: 570px) {
    width: 300px;
  }

  @media (min-width: 820px) {
    width: 400px;
  }

`

export const Image = ({ src, alt }) => {
    return (
        <StyledImage src={src} alt={alt} />
    )
}