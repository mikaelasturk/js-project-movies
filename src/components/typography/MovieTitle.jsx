import styled from "styled-components"

const StyledPageTitle = styled.h1`
  color: ${({ theme, variant }) => variant ? theme.sections[variant].headingClr: "inherit"};
  text-align: ${({ textAlign }) => textAlign === "center" ? "center" : textAlign === "right" ? "right" : "left"};
  text-shadow: 1px 1px #4d4d4d;
`;

export const MovieTitle = ({ title, children, variant, textAlign }) => {
  return (
    <StyledPageTitle variant={variant} textAlign={textAlign}>
      {title}
      {children}
    </StyledPageTitle>
  )
}
