import styled, { css } from "styled-components";

export const Wrapper = styled.div.attrs(() => ({
  className: "language-switcher",
  role: "radiogroup",
}))`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const buttonStyles = css`
  padding: 0.5rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 600;
  border: 2px solid #022b3a;
  border-radius: 6px;
  background-color: white;
  color: #022b3a;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #022b3a;
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(2, 43, 58, 0.3);
  }
`;

export const StyledButton = styled.button.attrs<{ $active: boolean }>(
  ({ $active }) => ({
    "aria-pressed": $active,
    className: `language-switcher__button${
      $active ? " language-switcher__button--active" : ""
    }`,
  })
)<{ $active: boolean }>`
  ${buttonStyles}

  ${({ $active }) =>
    $active &&
    css`
      background-color: #022b3a;
      color: white;
      pointer-events: none;
      border-color: #022b3a;
    `}
`;
