import styled from "styled-components";

export const Wrapper = styled.div.attrs(() => ({
  className: "character-list",
}))`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;
