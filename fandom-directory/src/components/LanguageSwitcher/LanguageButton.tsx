import React from "react";
import { StyledButton } from "./LanguageSwitcher.styles";

interface Props {
  label: string;
  lang: string;
  isActive: boolean;
  onClick: (lang: string) => void;
}

export const LanguageButton: React.FC<Props> = ({
  label,
  lang,
  isActive,
  onClick,
}) => {
  return (
    <StyledButton
      $active={isActive}
      onClick={() => onClick(lang)}
      aria-pressed={isActive}
    >
      {label}
    </StyledButton>
  );
};
