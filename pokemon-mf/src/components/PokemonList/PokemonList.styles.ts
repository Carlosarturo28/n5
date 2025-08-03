import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.6rem 1rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;

  &:focus {
    border-color: #4783dc;
    outline: none;
  }
`;
