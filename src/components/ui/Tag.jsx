import styled from "styled-components";

const StyledTag = styled.span`
  background-color: #eee;
  padding: 4px 8px;
  font-size: 32px;
  font-weight: normal;
  color: #000;
  align-self: center;
  width: fit-content;
  margin: 0 8px;
  text-shadow: none;
`;  

export const Tag = ({ text }) => {
    return (
        <StyledTag>
          {text}
        </StyledTag>
    )
}