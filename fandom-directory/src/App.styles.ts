import styled from "styled-components";

export const AppWrapper = styled.div.attrs(() => ({
  className: "app",
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: #f3f4ed;
`;

export const Title = styled.h1.attrs(() => ({
  className: "app__title",
}))`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #022b3a;
`;

export const LoadButton = styled.button.attrs(() => ({
  className: "app__button",
}))`
  background-color: #4783dc;
  color: white;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:last-of-type {
    margin-bottom: 4rem;
  }
  &:hover {
    background-color: #3767b3;
  }
`;
